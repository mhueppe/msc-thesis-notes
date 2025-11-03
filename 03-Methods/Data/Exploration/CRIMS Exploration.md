
- [x] Rate Images from CRIMS site using the model ✅ 2025-10-23
- [x] do data analysis on crims data ✅ 2025-10-23
- [x] distribution of crystallization success for all plates ✅ 2025-10-23
- [x] descriptive data analysis ✅ 2025-10-23
- [x] relational data analysis ✅ 2025-10-23
- [x] automated crystal quality model performance ✅ 2025-10-23


![[Pasted image 20251023130549.png]]

![[Pasted image 20251023130832.png]]
![[Pasted image 20251023131634.png]]

![[Pasted image 20251023131552.png]]
![[Pasted image 20251023131557.png]]![[Pasted image 20251023131612.png]]

![[Pasted image 20251023132003.png]]


# Annotations

Automated scoring: 
Crystal probability < 30: No Crystal 
Crystal probability < 80: Possible Crystal 
Crystal probability > 80: High Chance Crystal 
![[Pasted image 20251023133548.png]]

Thresholds so high, why? But is the automatic scoring really helpful? 

Prob: 70%: 
![[FORMULATRIX_SD30010708_4_07-10-2025_02_05_01_00_99_Vis.jpg]]

Prob: 100%: 
![[FORMULATRIX_SD30010705_2_01-10-2025_03_03_01_00_99_Vis-1.jpg]]
![[FORMULATRIX_SD30010708_4_07-10-2025_05_01_01_00_99_Vis.jpg]]
![[FORMULATRIX_SD30010708_4_07-10-2025_10_06_01_00_99_Vis.jpg]]![[FORMULATRIX_SD30010708_4_07-10-2025_12_08_01_00_99_Vis.jpg]]
Crystals of Vastly different quality are scored the same by the automated AI scoring used by CRIMS. Solution → use a better model on the sample over a certain threshold 


With automated model: 
![[Pasted image 20251023142120.png]]
Missing samples are due to no image being taken and are being handled as "no Crystal"

End result: 
![[Pasted image 20251023151910.png]]

![[Pasted image 20251023152116.png]]

![[Pasted image 20251023152950.png]]d![[Pasted image 20251023153426.png]]![[Pasted image 20251023153856.png]]
