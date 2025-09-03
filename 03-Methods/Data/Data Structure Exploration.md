
- [x] Analyse cluster similarites between protein ids (i.e. differnet sequences all belonging to the same protein ) ✅ 2025-09-03
- [x] Analyse cluster similarites between groups ✅ 2025-09-03
- [x] Analyse Cluster between source organism ✅ 2025-09-03
- [x] Analyse Cluster between Protein ✅ 2025-09-03
- [ ] Analyse Temperature and Ph correlation 

# Overall Protein Class similarity
![[Pasted image 20250903082418.png]]
![[Pasted image 20250903082511.png]]

## Protein id: 

Protein Ids split different sub structures into different amino acid sequences. 
Are the sub structure of a given protein in any way similar to each other in the embedding space? 
No real grouping present
![[Pasted image 20250903080105.png]]

![[Pasted image 20250903080045.png]]

# Protein Groups

Proteins are named based on the most significant information from the protein
- construct a free text pdb search for given protein groups, collect their entries, and check if there is similarity within these groups
- Analysed: 
	atrazine,ferredoxin,ankyrin,hemoglobin,cytochrome c,superoxide dismutase,serine protease trypsin,ribonuclease A,myosin motor domain,heat shock protein 70,DNA polymerase I,G protein coupled receptor
Though mixed, the proteins generally group together, moreover it can be seen that some proteins are easy distinguishable i.e. do not group with other groups (for example myosin motor domain)

![[Pasted image 20250903080431.png]]

![[Pasted image 20250903080607.png]]

# Source organism

pdbx_gene_src_scientific_name specifies the source organism of a given protein 
Is the source organism encoded in the embedding? -> Barely some group very vell (Corona viurs) others not at all 
![[Pasted image 20250903080717.png]]
![[Pasted image 20250903080737.png]]![[Pasted image 20250903080807.png]]

# Protein 

The db_code in struct_ref denotes the specific protein for a given entry. Is the protein well represented in the embedding space? -> yes!


Analysed proteins: 
![[Pasted image 20250903080940.png]]
![[Pasted image 20250903081028.png]]![[Pasted image 20250903081042.png]]

![[Pasted image 20250903163740.png]]
# Species of origin

The db code is structured like Id+species so similar to before we analyse the broader species groups. As expected they are much broader however they still cluster to some degree

![[Pasted image 20250903081914.png]]

![[Pasted image 20250903082129.png]]


# PH 
Clusters represent proteins. 
Meaning while there exist pH clusters in the embedding space they are more likely there because of a given protein has been crystallized under the same conditions. 
While that suggest that the embedding does not explicitly (as much one can say explicit in an embedding) model pH it is clear that Protein does correlate with pH this is useful to know regardless
![[Pasted image 20250903163834.png]]

Namely the protein clusters are identical to the Ph clusters (only show top 30 proteins and blend out the misc)
![[Pasted image 20250903174834.png]]
For reference these are the pH Values for proteins for the same 30 proteins showing the rough matching 
![[Pasted image 20250903175806.png]]
![[Pasted image 20250903181210.png]]

ANOVA F = 272.9194499140978 p = 0.0
F = 272.9194499140978
p = 0.000e+00
Eta squared = 0.4902331572584004
Kruskal:  5672.0181401205955 P value:  0.0

# Temperature 
Clusters represent proteins and not temperature, the same findings as for pH holds for temperature. Meaning protein highly correlates with temperate. This is good to know meaning there is ground for the fact that proteins crystallize under similar conditions
![[Pasted image 20250903163849.png]]
Again same principle grouping matches protein (however the variance is much smaller than the pH)
![[Pasted image 20250903180202.png]]
ANOVA F = 329.29772350772373 p = 0.0
F = 329.29772350772373
p = 0.000e+00
Eta squared = 0.5371099424312948
Kruskal:  4446.717674250878 P value:  0.0
# Method
Same as with Ph and Temperature, correlations and clusters most likely build on protein
![[Pasted image 20250903173553.png]]