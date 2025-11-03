---
type: paper-notes
title: "ProteinMAE masked autoencoder for protein surface  self-supervised learning"
authors: "{{authors}}"
year: "{{year}}"
link: "{{url}}"
tags:
  - paper
  - reading-notes
  - "#research"
---

[Paper link](https://academic.oup.com/bioinformatics/article/39/12/btad724/7455256)
# Pass 1 – Bird’s-Eye View (5–10 min)

## **Category**  
```ad-qa
title: What type of paper is this? (e.g., measurement, system analysis, prototype/Model/Algorithm description)
collapse: open

Model Description of ProteinMAE
```

## **Context**  
```ad-qa
title: Which other papers/resources is it related to?
collapse: open

MaSif and dMasif
	- They use dMaSif to get the surface of the protein 
	- geometric deep learning
```

## **Correctness**  
```ad-qa
title:  Do the assumptions appear valid?
collapse: open

Methodology
	- That patches of a protein surface are sufficient to represent the entire surface in latent space
	- That protein-protein interaction, ligand-binding protein pocket classification as well as binding site identification are dependent on protein surface
```


## **Contributions**  
```ad-qa
title:  What are the main contributions?
collapse: open 

Contributions: 
	- The presentation of an masked autoencoder to represent protein surfaces in a lower dimensional space using a token embedding
	- presentation of ProteinMAE, a self-supervised learning framework for protein surface representation learning, which utlizes a large amoung of accessible unlabaled data to boost performance on downstream tasks
	- efficient network suitable for self-supervised learning, which has a competetive perforamce to previous work but with less than a tenth of the memory cost 
	- improvement on all downstream tasks and new state-of-the art performance in some tasks
  
```

```ad-qa
title: Is the paper well written and understandable?
collapse: open   
Yes
```

## **Decision**  
```ad-qa
title: Do I need to read further? Why/why not?
collapse: open  

Yes find out more about the token embedding of the protein surface and how it can be used in the model 
```


---

# Pass 2 – Key Content (≤1h)

## **Figures & Graphs**  
```ad-qa
title:  Do the figures accurately depict the contents/result of the paper?

Yes. 
Figure 1: 
(a) Explains Pretraining 

		- From the dataset the protein structure is pulled
		- The protein surface is constructed as a point cloud using dMaSIF
		- The protein surface is divided into patches
		- some patches are masked
		- All patches are fed into the encoder
		- The encoder creates a token embedding to feed into the decoder
		- The decoder predicts all patches including the masked ones
		- The loss is calculated between the masked patches and the ground truth
(b) Fine-tunining

		- Explains possible downstream tasks
		- Binding site identification, Ligand pocket classification, PPI prediction 
		- in the future: Crystallization condition prediction
```


```ad-qa
title:  Do the results look sound?
collapse: open

- Yes it would make sense that the model is faster due to the removal of the geometric convolutions 
- Also a better performance makes sense given the new task and the transformer based model 
```

## **Methods & Results**  
```ad-qa
title:  What methods are used?

Patch masking, Attention transformer, Autoencoder i.e. Encoder and Decoder
```


```ad-qa
title:  What evidence supports the claims?
collapse: open

Performance in benchmask tasks 
The encoder creates a meaningful surface representation in the head
This encdoer representation can be ued for the downstream tasks


## Encoder: 
![[Pasted image 20251015111552.png]]
	- Patches from the surface is created 
	- randomly mask proportion of them 
	- the unmasked patches are fed into the encoder 
	- within the encoder, a tokenizer is employed to convert theunmasked patches into tokens, enabling their further processing the transformer
	- the following transofmer will take tokens as input and extract features for downstream tasks or reconstruction in pretraining
  
## Tokenizer: 
![[Pasted image 20251015111612.png]]
	- Receives Patch points
	- fed into Point encoder
	- extract point-level feature for each point
	- extracted features are further processed by a MLP and are subsequently fused through a max-pooling layer to generate features for patches
	  
## Point encoder: 
![[Pasted image 20251015111624.png]]
	- The point encoder in tokernizes takes each point within the patches as input and further processes the raw chemical features 
	  chemical features including atom types of neighbor atoms and their corresponding Euclidean distances are proessed into 6D features through a MLP and a message passing network 
	- Processed chemical features are then concatenated with the precalculated gemetric features and collectively output
	
## Message passing network 
![[Pasted image 20251015111637.png]]
![[Pasted image 20251015111649.png]]
	- Consists of three message passing blocks
	- each block takes a local feature, encoded atom types of neigbor atoms and their corresponding distances as input and output a local feature for further extraction
```

## **Takeaways**  
```ad-qa
title:  How would I summarize the main thrust of the paper in 2–3 sentences?
collapse: open

Presentation of Protein auto encoder to use in downstream tasks
```


## **References to Follow Up**  
- (List unread or relevant references for later reading)

---

# Pass 3 – Deep Understanding (1–5h)

## **Reconstruction**  
```ad-qa
title:  If I were to re-implement this work, what steps/assumptions would I need?
```

```ad-qa
title:  Where do the innovations lie? Where are the hidden weaknesses?
collapse: open
```
## **Critical Analysis**  
```ad-qa
title:  What assumptions are questionable?
collapse: open
```

```ad-qa
title:  Are there missing citations or overlooked related work?
```

```ad-qa
title:  Any issues with proofs/experiments?
collapse: open
```

## **Comparison**  
```ad-qa
title:  How would I have presented this idea differently?
collapse: open
```

``` ad-qa
title:  What techniques can I add to my own toolbox?
collapse: open
```

## **Ideas for Future Work**  
- (Brainstorm new research directions inspired by this paper)

## **Overall Evaluation**  
- Strengths:  
- Weaknesses:  
- Relevance to my research:  

# General Notes
