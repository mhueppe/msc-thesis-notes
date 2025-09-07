const { Plugin, TFile } = require("obsidian");

module.exports = class QAPlugin extends Plugin {
    onload() {
        this.registerMarkdownCodeBlockProcessor("qa", (source, el, ctx) => {
            const lines = source.split("\n");
            const placeholderQ = "❓ ";
            const placeholderA = "✏️ ";
            const section = ctx.getSectionInfo(el);
            if (!section) return;

            const plugin = this;

            // 🔹 helper to persist changes
            async function writeLine(absLine, newText) {
                const file = plugin.app.vault.getAbstractFileByPath(ctx.sourcePath);
                if (!(file instanceof TFile)) return;

                const replacer = (data) => {
                    const all = data.split("\n");
                    if (absLine < 0 || absLine >= all.length) return data;
                    all[absLine] = newText;
                    return all.join("\n");
                };

                if (typeof plugin.app.vault.process === "function") {
                    await plugin.app.vault.process(file, replacer);
                } else {
                    const data = await plugin.app.vault.read(file);
                    const updated = replacer(data);
                    if (updated !== data) await plugin.app.vault.modify(file, updated);
                }
            }

            // 🔹 helper to insert new Q/A pair
            async function insertNewQA(insertAt, indent, focusNext = true) {
                const file = plugin.app.vault.getAbstractFileByPath(ctx.sourcePath);
                if (!(file instanceof TFile)) return;

                const blockInsert = [`${indent}Q: `, `${indent}A: `];
                let newAbsLine = insertAt + blockInsert.length;

                await plugin.app.vault.process(file, (data) => {
                    const all = data.split("\n");
                    all.splice(insertAt, 0, ...blockInsert);
                    return all.join("\n");
                });

                // 🔹 refocus after small delay so DOM updates
                if (focusNext) {
                    setTimeout(() => {
                        const qBoxes = el.querySelectorAll(".qa-question .qa-editable");
                        if (qBoxes.length > 0) {
                            qBoxes[qBoxes.length - 1].focus();
                        }
                    }, 200);
                }
            }

            lines.forEach((rawLine, idx) => {
                if (!rawLine.trim()) return;

                const indent = rawLine.match(/^\s*/)[0];
                const trimmed = rawLine.trim();
                const level = Math.floor(indent.length / 2);

                const absoluteLine = section.lineStart + 1 + idx;

                // --- Questions ---
                if (trimmed.startsWith("Q:")) {
                    const q = document.createElement("div");
                    q.className = "qa-question";
                    q.style.marginLeft = `${level * 20}px`;

                    const editableQ = document.createElement("div");
                    editableQ.className = "qa-editable";
                    editableQ.contentEditable = "true";
                    editableQ.textContent = trimmed.substring(2).trim() || placeholderQ;

                    editableQ.addEventListener("focus", () => {
                        if (editableQ.textContent.trim() === placeholderQ) editableQ.textContent = "";
                    });

                    editableQ.addEventListener("blur", async () => {
                        let newText = editableQ.textContent.trim();
                        if (!newText) {
                            editableQ.textContent = placeholderQ;
                            newText = "";
                        }
                        await writeLine(absoluteLine, indent + "Q: " + newText);
                    });

                    q.appendChild(editableQ);
                    el.appendChild(q);
                    return;
                }

                // --- Answers ---
                if (trimmed.startsWith("A:")) {
                    const answerWrapper = document.createElement("div");
                    answerWrapper.className = "qa-answer";
                    answerWrapper.style.marginLeft = `${level * 20 + 16}px`;

                    const editableA = document.createElement("div");
                    editableA.className = "qa-editable";
                    editableA.contentEditable = "true";
                    editableA.spellcheck = true;
                    editableA.textContent = trimmed.substring(2).trim() || placeholderA;

                    editableA.addEventListener("focus", () => {
                        if (editableA.textContent.trim() === placeholderA) editableA.textContent = "";
                    });

                    editableA.addEventListener("blur", async () => {
                        let newText = editableA.textContent.replace(/\u00A0/g, " ").trim();
                        if (!newText) {
                            editableA.textContent = placeholderA;
                            newText = "";
                        }
                        await writeLine(absoluteLine, indent + "A: " + newText);
                    });

                    editableA.addEventListener("keydown", async (ev) => {
                        // Enter = save + new Q/A if last one
                        if (ev.key === "Enter" && ev.shiftKey && !ev.altKey) {
                            ev.preventDefault();
                            let newText = editableA.textContent.replace(/\u00A0/g, " ").trim();
                            editableA.textContent = placeholderA;
                            newText = "";
                            await writeLine(absoluteLine, indent + "A: " + newText);
                            editableA.blur();

                            // if last line in block → insert sibling Q/A
                            if (idx === lines.length - 1) {
                                await insertNewQA(section.lineStart + lines.length + 1, "");
                            }
                        }

                        // Alt+Shift+Enter = new indented child Q/A
                        if (ev.key === "Enter" && ev.shiftKey && ev.altKey) {
                            ev.preventDefault();
                            let newText = editableA.textContent.replace(/\u00A0/g, " ").trim();
                            if (!newText) {
                                editableA.textContent = placeholderA;
                                newText = "";
                            }
                            await writeLine(absoluteLine, indent + "A: " + newText);
                            editableA.blur();

                            // insert child one level deeper (2 extra spaces)
                            const childIndent = indent + "  ";
                            await insertNewQA(section.lineStart + idx + 2, childIndent);
                        }
                    });

                    answerWrapper.appendChild(editableA);
                    el.appendChild(answerWrapper);
                }
            });
        });

        // 🔹 Add Command Palette shortcut
        this.addCommand({
            id: "insert-qa-block",
            name: "Insert Q&A block",
            editorCallback: (editor, view) => {
                const snippet = "```qa\nQ: \nA: \n```";
                editor.replaceSelection(snippet);

                // place cursor inside the first question line
                const cursor = editor.getCursor();
                editor.setCursor({ line: cursor.line - 2, ch: 3 });
            }
        });
    
    }

    onunload() { }
};
