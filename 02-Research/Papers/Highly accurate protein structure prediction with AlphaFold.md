---
type: paper-notes
title: Highly accurate protein structure prediction with AlphaFold
authors: "{{authors}}"
year: "{{year}}"
link:
tags:
  - paper
  - reading-notes
---
[Paper link](s41586-021-03819-2.pdf)
# Pass 1 – Bird’s-Eye View Abstract/Conclusion (5–10 min)

## **Category**  
```qa
Q: ❓ What type of paper is this? (e.g., measurement, system analysis, prototype description)
A: ✏️ Machine learning paper about applying deep neural networks to bioinformatics for protein structure prediction
```

```qa
Q: ❓ Which other papers/resources is it related to?
A: ✏️ Uses the protein data base, participated in the 14th Critical Assesment of protein Structure Prediction (CASP14) a competition of protein structure prediction
Q: ❓ What theoretical bases are referenced?
A: ✏️Multi-sequence alignment as input to the deep learning algorithm
```


## **Correctness**  
```qa
Q: ❓ Do the assumptions appear valid?
A: ✏️ Yes
```


Q: ❓ Do the assumptions appear valid?
```qa
Q: ❓ What are the main contributions?
A: ✏️ A new model which predict protein structure based on acid sequence alone outperforming all previous algorithms/models by large margin - A model that is able to produce accurate structure models even when physical context or homomers (evolutionary similar proteins) are missing, due to efficiency single protein structures can be estimated in minutes and proteom-scale predictions are possible
Q: ❓ What theoretical bases are referenced?
A: ✏️ Multiple sequence alignment, physical structure dependencies/interactions and evolutionary based homology to inform structure
```


## **Clarity**  

```qa
Q: ❓  Do I need to read further? Why/why not?
A: ✏️ check how the multiple sequence alignment works for the model
Q: ❓  Is the paper well written and understandable?
A: ✏️ yes really well
```



---

# Pass 2 – Key Content (≤1h)

## **Figures & Graphs**  
```qa
Q: ❓ Do the figures accurately depict the contents/result of the paper?
A: ✏️ Yes, the pipeline is depicted which shows the model starting with the input sequence of the target protein, Then fed into the genetic database for multiple sequence alignment, this MSA representation is fed into the evoformer blocks. Additionally, the primary acid sequence used pairing and structure database search for structure templates, this pair representation is also added into the evoformer
A: ✏️ Also different examples for the Alphafold predictoins are shown for different TM scores and Å values
Q: ❓ Do the results look sound?
A: ✏️ Yes, the present the comparison of carbon alpha rmsd between the target structure and the predicted one. Both bias (median) and the variance is mch smaller than for other algorithms
```

## **Methods & Results**  
```qa
Q: ❓ What methods are used?
A: ✏️ Multiple sequence alignments, genetic database searches for evolutionary homology, structure databases, (backbone) rmsd and tm score for evaluation
Q: ❓  What evidence supports the claims?
A: ✏️ Performance values
```
### Notes Methods
The  AlphaFold network 
	- based on evolutionary, physical and geometric constraints of protein structures
	- <mark style="background: #FF5582A6;">embedd multiple sequence alignments</mark> and <mark style="background: #FF5582A6;">pairwise features</mark> for input
	- directly predicts the 3D coordinates of all heavy atoms for a given protein using the primary amino acid sequence and aligned sequences of homologues as inputs 
	- output representation → 
	 - Initialize atom sites with position at origin and rotation at identity
Evoformer
	- Refines the MSA and Pair representation using Attention and communication between the two modules 
	- ![[Pasted image 20250908193956.png]]
MSA representation: 
	- sequence x residues 
	- Columns: encode the individual residues of the input sequence
	- Rows: represent the sequences in which those residues appear 
	- Each residues is represented as an embedding vector so the representation of a amino acid sequence is essentially a matrix of shape n x d (n → of residues and d →  dimension of embedding space)
	- $m_{s,i} \in \mathbb{R}^d$
	- **Conservation** (columns that hardly change) → residues crucial for stability or function.
	- **Covariation** (if residue i mutates, residue j mutates too) → evidence those residues are **in contact** or structurally constrained together.
Pair representation: 
	- residue x residue embedding
	- ![[Pasted image 20250908210233.png|200]]
	- before refinement, AlphaFold initalizes the pair representation with features like sequence seperation (|i-j|, how far residues are in sequence), positional encodings, and any prior templates if available
		- Not true distances yes, just basic assumptions
	- during evoformer iterations, attention layers update the pair matrix by exhanging information with the MSA representation. Over time, it becomes a learned contact map/geometryy piror
		- abstract representation of "how likely" are residues i and j to be near each other in 3D
	- Start: "these residues are close in sequence, so mabye close in space"
	- After (MSA informed) Evoformer: "these residues are evolutionarily constrained to interact, so they probably sit together in 3D"
Representation interaction: 
	- MSA and Pair representation update each other repeatedly through Evoformer blocks
	- MSA → Pair: 
		- if residues i and j covary across sequences, the pair embedding should reflect that
		- Mechanism: Outer Product Mean: 
			- $o_{s,i,j} = m_{s,i} \otimes m_{s,j}$
			- model takes embedding of residues from the MSA and computes an outer product (multiplying feature vectors)
			- outer product is averaged over all aligned sequences
			- $o_{i,j} = \frac{1}{S} \sum_{s=1}^S o_{s,i,j}$
			- Result: information about residue-residue correlations gets injected into the pair representation
	- Pair → MSE: 
		- Row attention: each residue in MSA looks cross other residues in the same sequence to decide which to pay attention to
		- $$\text{score}_{ij} = \frac{Q_i \cdot K_j}{\sqrt{d}} + \text{bias}_{ij}$$
		- bias comes from the pair embedding meaning the pair representation tells the MSA representation which residue to pay more attention to 
	- MSA is enriched with structural context
	- Pair becomes geometry-rich contact map 
End-to-end structure prediction 
	- structure module operates on a concrete 3D backbone structure using the pair representation and the orignal sequence row of the MSA 
	- structure is represented as $N_{res}$ independent rotations and translations, each with respect to the global frame 
### Notes Results


## **Takeaways**  
```qa
Q: ❓ How would I summarize the main thrust of the paper in 2–3 sentences?
A: ✏️ Alphafold predicts protein structure prediction based on acid sequence using deep learning. More specifically, Multiple sequence alignment is used to construct a evolutionary basis
```
# Pass 3 – Deep Understanding (1–5h)

## **Reconstruction**  
```qa
Q: ❓ If I were to re-implement this work, what steps/assumptions would I need?
A: ✏️ That protein folding and structure is informed through both physical and evolutionary history
Q: ❓ Where do the innovations lie? Where are the hidden weaknesses?
A: ✏️ The two representations (MSA and Pair) and communication between them, i.e. creating a meaningful evolutionary informed and physically informed representation
```
## **Critical Analysis**  
```qa
Q: ❓ What assumptions are questionable?
A: ✏️ None
Q: ❓ Are there missing citations or overlooked related work?
A: ✏️ None
Q: ❓ Any issues with proofs/experiments?
A: ✏️ None
```

## **Comparison**  

```qa 
Q: ❓ If I were to re-implement this work, what steps/assumptions would I need?
A: ✏️ That structure correlates with evolutionary information and similarly that MSE can encode evolutionary information, both assumptions are very well supported in literature
Q: ❓ How would I have presented this idea differently?
A: ✏️ None
Q: ❓ What techniques can I copy for my research?
A: ✏️ Multiple sequence alignment for the input of the condition prediction model with the assumption: Evolutionary similar crystals crystallize under the same conditions and pair representation: structurally similar proteins crystallize under the same conditions
```

## **Ideas for Future Work**  
- (Brainstorm new research directions inspired by this paper)

## **Overall Evaluation**  
- Strengths:  
- Weaknesses:  
- Relevance to my research:  

# General Notes
