	# Tasks
- [x] create WSL environment to run linux only compatible code while still using pycharm ✅ 2025-10-04
- [x] implement pipeline to get normalized point cloud representations for a given protein surface ✅ 2025-10-04
- [x] Implement function to export subsample surface values to .ply format ✅ 2025-10-04
- [x] Visualize data using ParaView ✅ 2025-10-04
- [x] Compare Visualizations for different subsample levels ✅ 2025-10-04
- [x] convert all .cif files into .npy coordinate files ✅ 2025-10-06
- [x] implement batching based on multiple files  @completed(2025-10-07T12:23:47+02:00)
- [x] parse all npy files into LMBD database for faster access ✅ 2025-10-06
- [x] convert all .npy files to surface files @completed(2025-10-20T11:53:27+02:00)
- [x] implement protein size dependent dMaSif surface generation  @completed(2025-11-10T15:33:32+01:00)
- [x] minimize database space  @completed(2025-10-07T12:23:38+02:00)
- [x] perform data analysis on DMaSIF  @completed(2025-10-20T11:53:44+02:00)

Differentiable molecular surface interaction fingerprinting
Based on the paper described in [[Fast end-to-end learning on protein surfaces]]

```python   
def atoms_to_points_normals(  
    atoms,  
    batch,  
    distance=1.05,  
    smoothness=0.5,  
    resolution=1.0,  
    nits=4,  
    atomtypes=None,  
    sup_sampling=20,  
    variance=0.1,  
):  
    """
    Turns a collection of atoms into an oriented point cloud.  
  
    Sampling algorithm for protein surfaces, described in Fig. 3 of the paper.  
    Args:        
    atoms (Tensor): (N,3) coordinates of the atom centers `a_k`.        
    batch (integer Tensor): (N,) batch vector, as in PyTorch_geometric.       
    distance (float, optional): value of the level set to sample from the smooth distance function. Defaults to 1.05.       
    smoothness (float, optional): radii of the atoms, if atom types are            not provided. Defaults to 0.5.        
    resolution (float, optional): side length of the cubic cells in the final sub-sampling pass. Defaults to 1.0.        
    nits (int, optional): number of iterations . Defaults to 4.        
    atomtypes (Tensor, optional): (N,6) one-hot encoding of the atom chemical types. Defaults to None.  
    Returns:       
    (Tensor): (M,3) coordinates for the surface points `x_i`.        
    (Tensor): (M,3) unit normals `n_i`.        
    (integer Tensor): (M,) batch vector, as in PyTorch_geometric.    
    """
``` 
![[Pasted image 20251003141039.png]]

![[Pasted image 20251004171053.png]]
![[Pasted image 20251004171112.png]]

When doing native extreme subsampling (reducing by 26x) the overall shape stays consistent but smaller importatnt surface features might be lost 
![[Pasted image 20251004172017.png]]


# Optimization of dMaSif surface sampling 

Time for surface generation decrases with batch size 
![[Pasted image 20251006142539.png]]


## Protein MAE


![[Pasted image 20251015111612.png]]




![[Pasted image 20251015111624.png]]
