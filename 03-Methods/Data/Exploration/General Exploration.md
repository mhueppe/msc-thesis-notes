## Tasks
- [x] Histogram for various features ✅ 2025-08-19
- [x] Relationships between various features ✅ 2025-08-19
- [x] Explore crystallization conditions ✅ 2025-08-26
- [x] Explore Crystal information ✅ 2025-08-26
- [x] Explore refinement data ✅ 2025-08-26
- [x] Explore reflection resolution data ✅ 2025-08-26
- [x] Explore Isoelectric Point ✅ 2025-08-26
- [x] Encode Protein Sequence ✅ 2025-09-03
	- [x] Cluster Proteins based on embedding ✅ 2025-09-02
	- [x] Explore Similarities in embedding and pH/Temperature/method ✅ 2025-09-03
- [x] Clean up all Data exploration #maintanence ✅ 2025-09-26
- [x] Split utils up by functionality #maintanence ✅ 2025-09-26
- [x] Analyse correlation between sequence length and atom count, based on classes, there seems to be a class dependent correlation, filter for monomers and polymers @completed(2025-10-13T08:25:14+02:00)
- [ ] analyse dependent distributions for sequence length pi and protein 
- [ ] Write Section on general Data Description #writing
# Nan Value Percentage per Information


![[NanValues.pdf]]
# Featuers

## Crystal Growth Temperature 

![[temperatureDistribution.pdf]]
## Crystal Growth pH

![[phDistribution.pdf]]
![[Pasted image 20250826192746.png]]
## Polymer Sequence

![[codeLengthDistribution.pdf]]

## Matthews Coefficient 
![[matthewDistribution.pdf]]

## Solvent Content Percent
![[solventDistribution.pdf]]

# Description Length

![[descriptionDistribution 1.pdf]]
# Resolution

![[resolutionLowDistribution.pdf]]![[resolutionHighDistribution.pdf]]
![[Pasted image 20250826192722.png]]
# Reflection Resolution 
![[reflectionResolutionhighDistribution.pdf]]

![[reflectionResolutionlowDistribution.pdf]]

![[Pasted image 20250826192655.png]]
# Cell Length 
![[Pasted image 20250826192609.png]]
![[cellLengthRelation 1.pdf]
![[cellLengthRelationViolin 1.pdf]]

![[correlationCellLength.pdf]]![[employmentMethodDistribution.pdf]]
468 "unique" methods
# Isoelectric Point 
![[Pasted image 20250930194110.png]]
![[Pasted image 20250906132041.png]]
![[Pasted image 20250923191707.png]]

![[Pasted image 20251013111540.png]]


# Atom count vs number of sequences 
What are the different lines here? 
![[Pasted image 20251008175049.png]]
![[Pasted image 20251008180501.png]]

![[Pasted image 20251013081153.png]]
- [ ] read files and calculate modeled residue count vs deposited one → explain difference between sequence based mean atom count vs. calculated one 
	- [ ] is_protein() →  fraction between non-protein atoms and protein-atoms 
# Wrong atom count
	3RED: 

Number of models: 1, 
Number of coords: 48604,
Number of chains: 12, 
Atom count derived from acid: 3186.0, 
Chains/target: 15.2
![[Pasted image 20251009104158.png]]
