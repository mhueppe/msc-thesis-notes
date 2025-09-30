- [x] install windows subsystem for linux ✅ 2025-09-09
- [x] install ubuntu ✅ 2025-09-09
- [x] install mmseqs on the ubuntu ✅ 2025-09-09
- [ ] look into other sequence similarity scores #research 
### WsL download: 
1. `dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
2. `dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
3. Install Ubuntu from the microsoft store 
4. Confirm installation
	1. wsl --version
	2. wsl → drops into an ubunto shell after ubuntu was installed
5. In the Ubuntu terminal install mmseq
	1. ``wget https://mmseqs.com/latest/mmseqs-linux-avx2.tar.gz``
	2. ``tar xvf mmseqs-linux-avx2.tar.gz``
	3. ``export PATH=$PWD/mmseqs/bin:$PATH``
6. Persist the path
	1. ``echo 'export PATH="$HOME/mmseqs/bin:$PATH"' >> ~/.bashrc``
	2. ``source ~/.bashrc``
	3. ``mmseqs --version``
7. Call linux command from windows side (and powershell) using:
	1. ``wsl bash -lc "mmseqs version"

# MMSEQ

[MMseqs2](https://github.com/soedinglab/MMseqs2) (Many-against-Many sequence searching) is a software suite to search and cluster huge protein and nucleotide sequence sets. MMseqs2 is free and open source software implemented in C++ for Linux, MacOS, and (as beta version, via cygwin) Windows. The software is designed to run on multiple cores and servers and exhibits very good scalability. MMseqs2 can run 10000 times faster than BLAST. At 100 times its speed it achieves almost the same sensitivity. It can perform profile searches with the same sensitivity as PSI-BLAST at over 400 times its speed.

## Result 

| query | target | fident | qcov | tcov | evalue | bits | weight |
| ----- | ------ | ------ | ---- | ---- | ------ | ---- | ------ |
| seq0  | seq5   | 0.73   | 0.95 | 0.92 | …      | …    | 0.67   |
| seq5  | seq0   | 0.73   | 0.92 | 0.95 | …      | …    | 0.67   |
| …     | …      | …      | …    | …    | …      | …    | …      |
- **`fident`** (_fraction identity_, 0–1):  
    \#identical residues ÷ \#aligned columns (after the alignment).  
    Example: 73 identical positions out of 100 aligned → `fident = 0.73`.
- **`qcov` / `tcov`** (_coverage_, 0–1):  
    Fraction of the **full** query/target sequence that is covered by the alignment.  
    Example: if the query is 200 aa and the alignment spans 180 of those aa → `qcov = 0.90`.
- **`evalue`** (smaller = better):  
    Expected number of equally-good-or-better hits you’d see **by chance** in a database of this size.  
    Typical cutoffs: 1e−3, 1e−5, 1e−10 (stricter as the number gets smaller).
- **`bits`** (larger = better):  
    Alignment score normalized so it’s comparable across searches/scoring systems.  
    Roughly, +10 bits ≈ ~1,000× less likely by chance.
- **“Hit”**: a query–target pair that **passed filters** during the search (e.g., our `-c 0.8 --cov-mode 2` coverage filter and MMseqs default `evalue` threshold). MMseqs prefilters, then aligns surviving candidates and emits rows = “hits”.
- **Our single scalar “similarity” (`weight`)**:  
    We define  
    `weight = fident × min(qcov, tcov)`  
    so a tiny local match can’t look “very similar.” This stays in **[0, 1]** and is comparable across different lengths.

For none of the provided crystallization conditions there seems to be any correlation between condition and similarity between sequences
# PH 

![[Pasted image 20250909200651.png]]
# Temperature 

![[Pasted image 20250909200631.png]]

# Method

![[Pasted image 20250909200711.png]]