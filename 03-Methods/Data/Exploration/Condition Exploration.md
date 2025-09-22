- [x] Perform Explorative data Analysis on the cocktails parsed by [A searchable Crystallization database](https://github.com/Hauptman-Woodward/crystallizationDatabase/tree/master) ✅ 2025-09-16
- [x] Reimplement analysis presented in paper and check for common chemical cocktails ✅ 2025-09-16
- [x] Analyze most common cocktails (i.e. combinations of chemicals) ✅ 2025-09-17
- [x] Analyze most common cocktails partners ✅ 2025-09-17
- [x] Analyze Parsing Quality ✅ 2025-09-21
	- [x] Temperature and PH ✅ 2025-09-16
	- [x] Tokens/Words not incorporated into parsed representation, idea: if all the words that have not been used in the parsed version do not carry any important information that the parsing is good ✅ 2025-09-21
- [x] Perform data analysis for embedding correlations with conditions ✅ 2025-09-17
- [ ] Write Section on Condition Parsing #writing 
- [ ] Write Section on Condition Parsing Evaluation #writing 
- [ ] Write Section on Condition Analysis #writing 
# Compound Distribution 

![[Pasted image 20250916105549.png]]
## Top 20 Compound Distribution 
![[Pasted image 20250916105617.png]]

## Most common PEGs
![[Pasted image 20250916115746.png]]
# Cocktails
## Distribution of Cocktail Length
![[Pasted image 20250916115639.png]]
## Most common Cocktails

![[Pasted image 20250917234810.png]]
# Most common Partners 

![[Pasted image 20250917234329.png]]
# Concentration Distribution for different Pegs
![[Pasted image 20250919181635.png]]
→  concentration slightly correleated to molecular weight
→  no correlation between PEGs and Temperature/PH found
# Other Chemicals
![[Pasted image 20250916135625.png]]

# Embedding of Chemicals 
## PEGS
![[Pasted image 20250917095912.png]]

## Salts
![[Pasted image 20250917102145.png]]

## Additives
![[Pasted image 20250917102814.png]]

# Parse quality control 

![[Pasted image 20250916143148.png]]
![[Pasted image 20250916143155.png]]

![[Pasted image 20250922093609.png]]
Most common (non-stopword) nouns not used for parsing (absolute count value)
![[Pasted image 20250922093559.png]]
![[Pasted image 20250922093549.png]]
![[Pasted image 20250922095059.png]]

Percentage of most (absolute count) missed values
Percentage for most relative missed values no sense because there are too many that are completly missed i.e. 
![[Pasted image 20250921232625.png]]