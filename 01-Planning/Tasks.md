---
days: "50"
---

```dataviewjs
// --- CONFIG ---
const filter   = "all";    // "all", "done", or "not done"
const groupBy  = "folder";        // "path", "folder", "priority", or null
const sortBy   = "priority";    // "path", "priority", or null

// --- Progress Bar Helper ---
function progressBar(percent) {
  const p = Math.max(0, Math.min(100, percent));
  return `<div style="background:#ddd; border-radius:6px; height:0.5em; width:100%;">
    <div style="background:#4caf50; width:${p}%; height:100%; border-radius:6px;"></div>
  </div>`;
}

// --- Gather all tasks ---
let tasks = dv.pages().file.tasks;

// Apply filter
if (filter === "done")            tasks = tasks.where(t => t.completed);
else if (filter === "not done")   tasks = tasks.where(t => !t.completed);

// Grouping
let groups = [{ key: "All Tasks", rows: tasks }];
if (groupBy === "path")       groups = tasks.groupBy(t => t.path);
else if (groupBy === "folder")    groups = tasks.groupBy(t => t.path.split("/")[0]);
else if (groupBy === "priority")  groups = tasks.groupBy(t => t.priority || "none");

// Sorting
if (sortBy) groups.sort((a, b) => (a.key > b.key ? 1 : -1));

// Render
for (let g of groups) {
  const total = g.rows.length;
  const done  = g.rows.where(t => t.completed).length;
  const percent = total === 0 ? 0 : Math.round((done / total) * 100);

  dv.header(3, `${g.key} — ${done}/${total} (${percent}%)`);
  dv.span(progressBar(percent));
}
```

```dataviewjs
await dv.view("tasks-dashboard", {container: this.container});
```

# Open Tasks

```tasks
not done
group by path
sort by path
sort by priority
```





# Closed Tasks
```tasks
done
group by folder
sort by path
limit 20 by folder
```



Amino acids 
Pathogenes 