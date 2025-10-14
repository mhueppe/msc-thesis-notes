---
type: paper-notes
title: Fast end-to-end learning on protein surfaces
authors: "{{authors}}"
year: "{{year}}"
link: "{{url}}"
tags:
  - paper
  - reading-notes
  - "#research"
---

[Paper link](https://www.biorxiv.org/content/10.1101/2020.12.28.424589v1)
# Pass 1 – Bird’s-Eye View (5–10 min)

## **Category**  / Abstract
```ad-qa
title: What type of paper is this? (e.g., measurement, system analysis, prototype description)
collapse: open

Presentation of a new algorithm for representing Protein surfaces
```




## **Context**  / Related Works
```ad-qa
title: Which other papers/resources is it related to?
collapse: open

The previously presented MaSif (molecular surface interaction fingerprinting paper) which represents the surface of a protein

## Representation of a protein 

- 1D aminoacid sequence as simples representation
	- based on amino acid sequence use natural language processing models to embedd vectors for function prediction 
- protein structure prediction 
- Protein interactions (and for that matter protein crystallization) is less concerned with the internal parts of a protein and more so on the surface since these are crucial for interaction. 
- MaSif: pioneered mesh-based geometric deep learning for protein interactions 
	- showed applicatoin for classifiying binding sites for small ligands, disciminating sites of protein-protein interaction in surfaces and predicting protein-protein complexes
	- limits: input mesh-based representation of protein surface that mus be generated from the raw atomic point cloud as a preprocessing step, relies on hand-crafted chemical and gemoetric features, uses MoNet →  all are memory expensive

## Deep learning on surfaces and point clouds 

- geometric deep learning uses non-Euclidean structured data such as meshes, graphs and point clouds
   - Geodesic Conolutional Neural Networks, patch operators, graph message passing are used
	- PointNet for working with point clouds representing protein surfaces
```


## **Correctness**  / Discussion
```ad-qa
title:  Do the assumptions appear valid?
collapse: open

Yes
```


## **Contributions**  
```ad-qa
title:  What are the main contributions?
collapse: open 

The differntiable moleuclar surface interaction fingerprinting technique which uses deep learning to represent the surface of a protein, this can be used for interaction site prediction and prediction of protein-protein interactions. 
```


```ad-qa
title: Is the paper well written and understandable?
collapse: open   
Yes!
```


## **Decision**  
```ad-qa
title: Do I need to read further? Why/why not?
collapse: open  
Yes, goal: understand in detail how the algorithm works and how the model works so you can create surface representation for a given protein 
```



---

# Pass 2 – Key Content (≤1h)

## **Figures & Graphs**  
```ad-qa
title:  Do the figures accurately depict the contents/result of the paper?

![[Pasted image 20251003140832.png]]
Pipeline: showing the difference between original MaSIF and dMaSIF pipeline both in speed and operations. 

![[Pasted image 20251003141039.png]]
```


```ad-qa
title:  Do the results look sound?
collapse: open

Yes
![[Pasted image 20251003140936.png]]
```

## **Methods & Results**  
```ad-qa
title:  What methods are used?
Sucessive geometric representations of a protein, the input is a cloud of atoms with chmical types encoded as one-hot vectors. Then the surface of the proteins is represented as an oriented point cloud with unit normals. Uses KeOps library. 

## Surface generation 
### Fast sampling 
Surface can be desibred as the level set of a smooth distance function or meta ball. Surface is approximaged by the the atomic radius of each atom and the smooth distance function 


```


```ad-qa
title:  What evidence supports the claims?
collapse: open
```


## **Takeaways**  
```ad-qa
title:  How would I summarize the main thrust of the paper in 2–3 sentences?
collapse: open

The paper presents a fast and end to end way to represent protein surfaces. It uses fast sampling, a smooth distance function (SDF/metaballs) around atoms and gradient descent to sample points on the surface. That gives them an oritented point cloud (points+normals)
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
