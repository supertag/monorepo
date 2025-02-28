# 설치된 vscode 확장 도구 목록.md

```sh
code --list-extensions > extensions.txt
```

```
antiantisepticeye.vscode-color-picker
christian-kohler.path-intellisense
dbaeumer.vscode-eslint
esbenp.prettier-vscode
kamikillerto.vscode-colorize
ritwickdey.liveserver
shardulm94.trailing-spaces
telesoho.vscode-markdown-paste-image

vscode-icons-team.vscode-icons
zhuangtongfa.material-theme
```

### 저장된 확장 목록을 사용하여 한 번에 다시 설치하기

```sh
cat extensions.txt | xargs -n 1 code --install-extension
```
