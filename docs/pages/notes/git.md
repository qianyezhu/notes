---
title: Git笔记
sidebar: auto
sidebarDepth: 2
displayAllHeaders: true
---
## Git

### git使用入门

```bash
#第一步：
#1、克隆
git clone https://github.com/qianyezhu/hello-world.git
#2、添加远程地址
git remote add origin git@github.com:yourName/yourRepo.git  

#第二步：新加文件
 echo  "测试文本" > ceshi.txt

#第三步：查看状态
 git status

#第四步：将该文件加入缓冲区
 git add ceshi.txt

#第五步： 使用git commit -m "This is my first commit via Git!"来提交修改，-m后面所带的参数是本次提交信息，一般用来记录本次提交的主要意图。
 git commit -m "ceshi"

#第六步：上传
 git push origin master
git push -u origin master（将本地的master分支推送到origin主机，同时指定origin为默认主机）

#备注：
#如出现上传不成功等情况，可以通过如下命令进行代码合并【注：pull=fetch+merge]
git pull --rebase origin master
```

### Git pull 后恢复到原来版本

1. `git reflog master`  //(查看本地master分支历史变动纪录)
  <img :src="$withBase('/images/git/stickpicture.png')" alt="mixureSecure">
2. `git reset --hard <COMMIT_ID>` //（恢复到之前位置）  
  `git reset --hard master@{1}`
  
### 删除push到服务器上的commit

使用两条指令：  
`git reset --hard <commit_id>`  
`git push origin HEAD --force`  
其中commit_id是你想回到的commit的id（即想删除的commit的前一个commit），可以在github.com的commit中查看。

### git设置仓库代理及取消

1.设置Git代理  
`git config --global http.proxy http://127.0.0.0`
2.取消Git全局代理  
`git config --global --unset http.proxy`
3. 进入到 项目目录 执行 项目级别的代理  
`git config http.proxy http://127.0.0.0`

### 删除git用户凭证

控制面板→用户管理→管理用户凭证→window凭证

### 常用git stash命令

1. `git stash save "save message"`  : 执行存储时，添加备注，方便查找，只有git stash 也要可以的，但查找时不方便识别。
2. `git stash list`  ：查看stash了哪些存储
3. `git stash show` ：显示做了哪些改动，默认show第一个存储,如果要显示其他存贮，后面加stash@{$num}，比如第二个 git stash show stash@{1}
4. `git stash show -p` : 显示第一个存储的改动，如果想显示其他存存储，命令：git stash show  stash@{$num}  -p ，比如第二个：git stash show  stash@{1}  -p
5. `git stash apply` :应用某个存储,但不会把存储从存储列表中删除，默认使用第一个存储,即stash@{0}，如果要使用其他个，git stash apply stash@{$num} ， 比如第二个： `git stash apply stash@{1}`
6. `git stash pop` ：命令恢复之前缓存的工作目录，将缓存堆栈中的对应stash删除，并将对应修改应用到当前的工作目录下,默认为第一个stash,即stash@{0}，如果要应用并删除其他stash，命令：`git stash pop stash@{$num}` ，比如应用并删除第二个：git stash pop stash@{1}
7. `git stash drop stash@{$num}` ：丢弃stash@{$num}存储，从列表中删除这个存储
8. `git stash clear` ：删除所有缓存的stash

### git添加tag标签

    备注生产环境标签：标签规范：v1.0.0.2018122401
    创建标签：		git tag -a V1.2 -m 'WebSite version 1.2'
    查看标签：		git tag
    显示附注信息：		git show V1.2
    同步到远程代码库:	git push origin --tags
    删除标签:		git tag -d V1.2
    删除线上版本标签：	git push origin :refs/tags/V1.2
    获取远程版本标签:	git fetch origin tag V1.2
