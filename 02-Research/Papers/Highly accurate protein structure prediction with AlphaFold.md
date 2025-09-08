---
type: paper-notes
title: "Highly accurate protein structure prediction with AlphaFold"
authors: "{{authors}}"
year: "{{year}}"
link: "{{url}}"
tags:
  - paper
  - reading-notes
---
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
- The  AlphaFold network 
	- based on evolutionary, physical and geometric constraints of protein structures
	- <mark style="background: #FF5582A6;">embedd multiple sequence alignments</mark> and <mark style="background: #FF5582A6;">pairwise features</mark> for input
	- output representation → 
- End-to-end structure prediction 
	- 
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
A: ✏️ Performance decreases with decrease in humologous proteins
```
## **Critical Analysis**  
```qa
Q: ❓ What assumptions are questionable?
A: ✏️ 
Q: ❓ Are there missing citations or overlooked related work?
A: ✏️
Q: ❓ Any issues with proofs/experiments?
A: 
```

## **Comparison**  

```qa 
Q: ❓ If I were to re-implement this work, what steps/assumptions would I need?
A: 
Q: ❓ How would I have presented this idea differently?
A: ✏️
Q: ❓ What techniques can I copy for my research?
A: ✏️ 
```

## **Ideas for Future Work**  
- (Brainstorm new research directions inspired by this paper)

## **Overall Evaluation**  
- Strengths:  
- Weaknesses:  
- Relevance to my research:  

# General Notes
