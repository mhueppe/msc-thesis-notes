
# WSL
Activate WSL (Windows Subsystem for Linux) environment
```bash
source /home/mhueppe/.virtualenvs/msc-thesis-code/bin/activate
```
Activate jupyter WSL to use in Pycharm with specific token 
```bash
 jupyter lab --no-browser --ip=0.0.0.0 --port=8888 --NotebookApp.token='6c4bfd9ffd59618566557195d0f0a733f246545b8b118ca7'
```
→  note debugging works but line highlighting does not work 

When external hard drive is not found or the files inside it, then it is probably not mounted properly try: 
```bash
sudo umount /mnt/d
sudo mount -t drvfs D: /mnt/d
ls /mnt/d
```

look for open python process
```bash
ps aux | grep python
```
kill processes: 
```bash
kill <process_id>
```

Installing a new environment on WSL requires following changes:
```bash
# install proper python version (3.10)
sudo apt update
sudo apt install -y software-properties-common
sudo add-apt-repository ppa:deadsnakes/ppa
sudo apt update
sudo apt install -y python3.10 python3.10-venv python3.10-dev
# install nvidia cuda toolkit
sudo apt install -y nvidia-cuda-toolkit
nvidia-smi
nvcc --version
# test python version 
python3.10 --version
# activate environment 
source /home/mhueppe/.virtualenvs/msc-thesis-code/bin/activate
# install numpy before because of isolation build dependet sub packages
pip install "numpy>=1.23"
# install requirements with torch subpackages removed
pip install -r requirements.txt
# get torch version 
python -c "import torch; print(torch.__version__, torch.version.cuda)"
>> 2.8.0+cu128 12.8
# install torch based subpackages    
pip install torch-geometric torch-cluster torch-scatter torch-sparse torch-spline-conv -f https://data.pyg.org/whl/torch-2.8.0+cu128.html
```

# Gprod / Runpod 

1. create ssh public key 
```bash
ssh-keygen -t ed25519 -C "michi@runpod"
```
 2. register ssh key at run pod under settings/ssh keys. Open using: ``notepad C:\Users\michi/.ssh/id_ed25519.pub``
 3. ssh to runpod instance using
```bash
ssh 1u603sjxd9xqkg-64410ffb@ssh.runpod.io -i ~/.ssh/id_ed25519
```
