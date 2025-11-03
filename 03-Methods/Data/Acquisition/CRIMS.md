- [x] Parse conditions from CRIMS site ✅ 2025-10-20
- [x] download and test model to rate CRIMS images ✅ 2025-10-20
- [x] Parse all CRIMS images that need rating (there are a lot of false positives but very few false negatives. For that run the MARCO trained model only on the samples that have probability over 50%) ✅ 2025-10-21
- [x] Download all CRIMS images that need rating ✅ 2025-10-21
Proteins to check: 
- XTEN30
	- XTEN30_3
	- HJI006_9120,  HJI006_9125
	- SD30010705 C03-1: 5 crystals were fished, FORMULATRIX_SD30010705_2_01-10-2025_03_03_01_00_99_Vis.jpg
- SEFICD-ATOX-COMPLEX
- Crystal candidates are in Elab

Salt crystals may appear as protein crystals
- if phosphate in the condition the probability of salt crystals is very high
	- can be checked with uv light


Available data
$$5 \text{ time steps } \times 96 \text{ conditions } \times 46 \text{ plates} = 22080 \text{ conditions } $$

# Data pulling


## Condition table: 
class=table table-bordered 
![[Pasted image 20251020105950.png]]


Columns: 
![[Pasted image 20251020110144.png]]

Row: 
![[Pasted image 20251020110123.png]]

## Image

## Date
class="table table-bordered table-stripped"
![[Pasted image 20251020114807.png]]

Relative time stamp: ``<li class="font-bold ng-binding"> 20 minutes after </li>```
- 