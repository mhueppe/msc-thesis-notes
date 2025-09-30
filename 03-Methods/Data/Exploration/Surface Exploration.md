- [x] Parse SASA surface information from all proteins and write into data bank ✅ 2025-09-19
- [x] Surface information distribution ✅ 2025-09-19
- [x] Surface information relation to each other ✅ 2025-09-19
- [x] Surface information relation to descriptions ✅ 2025-09-19
- [x] Analyze Correlations between surface information and crystallization conditions ✅ 2025-09-19
- [ ] Look into Surface Representation using [MaSif](file:///C:/Users/michi/Downloads/s41592-019-0666-6.pdf) #research only do two passes as this is only background and will not be used (dMasif is much faster) 🆔 bk9usv
- [ ] Look into follow up paper for Surface Representation using [Differentiable MaSIF](https://openaccess.thecvf.com/content/CVPR2021/papers/Sverrisson_Fast_End-to-End_Learning_on_Protein_Surfaces_CVPR_2021_paper.pdf) #research 🆔 08cdcb ⛔ bk9usv
- [ ] Look into [Differentiable Masif Code](https://github.com/FreyrS/dMaSIF) #research ⛔ 08cdcb
- [x] Rerun Data extraction now including total area, number of atom, roughness and classes 🔺 ✅ 2025-09-30
- [x] Look into processing errors for files, examples: 7lh5.cif, 8cqw.cif ✅ 2025-09-30
- [ ] Write Section on Surface Data Retrieval and Exploration #writing 
- [x] Check net charge (from sequence with respect to crystallization pH) ✅ 2025-09-30

|Descriptor|What it Captures|High Value Meaning|
|---|---|---|
|Hydrophobicity Fraction|Surface polarity|Hydrophobic, aggregation-prone|
|Surface Entropy Fraction|Flexibility|Disordered, crystallization difficult|
|Roughness|Topography|Irregular, rugged surface|
|Sidechain Fraction|Exposure type|Sidechain-driven interactions|
|Hydro Polar Contrast|Patchiness|Distinct hydrophobic/polar clusters|
|SASA Skewness|Exposure spread|Unequal exposure distribution|
|Normalized Net Charge|Electrostatics|Strongly charged surface|

# Features

## 1. Hydrophobicity Fraction
**Definition**  
Fraction of the protein surface area that is composed of hydrophobic residues (Ala, Val, Leu, Ile, Phe, Met, Pro, Trp).

**Calculation**  
- Compute solvent accessible surface area (SASA) for each residue.  
- Identify hydrophobic residues.  
- Sum SASA of hydrophobic residues and divide by total SASA.  

$$
\text{Hydrophobicity Fraction} = \frac{\sum SASA_{\text{hydrophobic}}}{\sum SASA_{\text{total}}}
$$

**Crystallization relevance**  
- Moderate hydrophobicity helps crystal contacts form.  
- Excessive hydrophobic exposure → aggregation instead of ordered packing.  
- Too little → overly soluble, weak surface interactions.

---

## 2. Surface Entropy Fraction
**Definition**  
Fraction of the surface contributed by high-entropy residues (mainly Lys, Glu, Gln).  
These residues are flexible and disrupt stable crystal contacts.  

**Calculation**  
- Identify high-entropy residues.  
- Compute their SASA fraction relative to the total surface.  

**Crystallization relevance**  
- High values → unfavorable for crystallization (flexible sidechains interfere with packing).  
- Lower values → surface is more rigid, more likely to form stable lattice contacts.  
- Surface entropy reduction mutations (e.g., Lys→Ala) are a common crystallization strategy.

---

## 3. Roughness
**Definition**  
A measure of irregularity of the surface (grooves, bumps, curvature).  

**Calculation**  
- Quantify variation in local SASA or surface curvature.  
- Higher deviation = higher roughness.  

**Crystallization relevance**  
- Moderate roughness provides complementary surfaces for lattice contacts.  
- Excessive roughness → steric clashes, prevents tight packing.  
- Very smooth surfaces → weak, non-specific contacts.

---

## 4. Sidechain Fraction
**Definition**  
Fraction of solvent accessible surface made up of sidechains rather than backbone atoms.  

**Calculation**  
$$
\text{Sidechain Fraction} = \frac{SASA_{\text{sidechains}}}{SASA_{\text{total}}}
$$

**Crystallization relevance**  
- High values → surface chemistry dominated by sidechains, increasing chemical diversity for packing.  
- Low values → backbone-dominated, which may favor β-sheet stacking but reduce versatile interactions.  

---

## 5. Hydro-Polar Contrast
**Definition**  
Contrast between hydrophobic and polar patches on the surface.  

**Calculation**  
- Partition SASA into hydrophobic and polar.  
- Compute contrast/clustering (variance, Gini index, etc.).  

**Crystallization relevance**  
- High values → patchy surface (hydrophobic vs polar clusters), good for specific lattice contacts.  
- Low values → chemically uniform surface, weak crystal contacts.  

---

## 6. SASA Skewness
**Definition**  
Statistical skewness of SASA distribution across residues.  

**Calculation**  
$$
\text{Skewness} = \frac{\sum (SASA_i - \mu)^3}{n \cdot \sigma^3}
$$

**Crystallization relevance**  
- Positive skew → few residues dominate surface exposure (localized hotspots).  
- Negative skew → more evenly distributed exposure.  
- Balanced distribution often helps multiple stable contacts form.  

---

## 7. Normalized Net Charge
**Definition**  
Net electrostatic charge per surface area.  

**Calculation**  
$$
\text{Normalized Net Charge} = \frac{Q_{\text{total}}}{SASA_{\text{total}}}
$$

where \(Q_{\text{total}}\) is the sum of charges of ionizable residues at pH ~7.  

**Crystallization relevance**  
- Strong net charge (positive or negative) → electrostatic repulsion, hinders crystallization.  
- Near-neutral surfaces → optimal for lattice formation.  
- Salt conditions often used to screen excess charge.  

---

# Summary Table

| Descriptor              | What it Captures   | High Value Meaning | Crystallization Relevance |
|--------------------------|-------------------|-------------------|---------------------------|
| Hydrophobicity Fraction | Surface polarity  | Hydrophobic, aggregation-prone | Moderate values promote crystal contacts |
| Surface Entropy Fraction | Flexibility      | Disordered, flexible | Lower values favor crystallization |
| Roughness               | Topography       | Rugged/irregular surface | Moderate roughness aids packing |
| Sidechain Fraction      | Exposure type    | Sidechain-driven interactions | Balanced fraction supports diverse contacts |
| Hydro-Polar Contrast    | Patchiness       | Distinct polar/hydrophobic clusters | Patchiness promotes stable lattice formation |
| SASA Skewness           | Exposure spread  | Few residues dominate exposure | Balanced exposure supports contacts |
| Normalized Net Charge   | Electrostatics   | Strong surface charge | Near-neutral charge favors crystallization |

---

# Surface Information distribution 

![[Pasted image 20250923133818.png]]
![[Pasted image 20250930190926.png]]
![[Pasted image 20250923134535.png]]
![[Pasted image 20250923135847.png]]
![[Pasted image 20250923140038.png]]
![[Pasted image 20250923141921.png]]
![[Pasted image 20250923143119.png]]
![[Pasted image 20250923143057.png]]

![[Pasted image 20250923180646.png]]
![[Pasted image 20250923182724.png]]

# Surface Information Relation 

![[Pasted image 20250919133844.png]]
# Embedding Surface Properties Analysis 

![[Pasted image 20250919185818.png]]
![[Pasted image 20250919185900.png]]
![[Pasted image 20250919185951.png]]

# Surface Properties and Conditions
## Relation between PEG and Surface Properties

![[Pasted image 20250923150124.png]]
![[Pasted image 20250923150059.png]]

![[Pasted image 20250923150852.png]]

## Relation between Other Chemicals and Surface Properties
![[Pasted image 20250923150748.png]]
![[Pasted image 20250923151015.png]]
![[Pasted image 20250923151056.png]]
