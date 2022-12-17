mkdir trainedModel
cd trainedModel
wget --load-cookies ~/cookies.txt "https://docs.google.com/uc?export=download&confirm=$(wget --quiet --save-cookies ~/cookies.txt --keep-session-cookies --no-check-certificate 'https://docs.google.com/uc?export=download&id={FILEID}' -O- | sed -rn 's/.confirm=([0-9A-Za-z_]+)./\1\n/p')&id=1--9m-7N0BnGmIShn-WhZKPf6V5tjLu76" -O keras.h5 && rm -rf ~/cookies.txt


