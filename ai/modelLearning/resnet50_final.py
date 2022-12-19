# -*- coding: utf-8 -*-
"""resnet50_final.ipynb

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/1ltIEmm22zomSokGUAr033ugDNm4f73tr
"""

# 구글드라이브 및 런타임 gpu, 램 설정

from google.colab import drive
drive.mount('/gdrive', force_remount=True)

# gpu_info = !nvidia-smi
gpu_info = '\n'.join(gpu_info)
if gpu_info.find('failed') >= 0:
  print('Not connected to a GPU')
else:
  print(gpu_info)

from psutil import virtual_memory
ram_gb = virtual_memory().total / 1e9
print('Your runtime has {:.1f} gigabytes of available RAM\n'.format(ram_gb))

if ram_gb < 20:
  print('Not using a high-RAM runtime')
else:
  print('You are using a high-RAM runtime!')

from IPython.display import Image as ImageView

import tensorflow as tf 
from tensorflow import keras 
from sklearn.model_selection import train_test_split
import numpy as np
from glob import glob
from PIL import Image
import matplotlib.pyplot as plt
import os

#파라미터
learning_rate = 0.00085
N_EPOCHS = 70
N_BATCH = 64

# 클래스네임, 딕셔너리 추출
folder = glob('/gdrive/My Drive/datasets_grouped/*')
class_name = []
dic={}

for folderName in folder : 
  class_name.append(folderName.split('/')[4])

dicIdx = 0
for v in class_name :
  dic[v] = dicIdx
  dicIdx+=1

print(class_name)
print(dic)

# 구글드라이브에서 이미지 파일 로드

image_datas = glob('/gdrive/My Drive/datasets_grouped/*/*.*')
X=[]
Y=[]



import os
from keras.preprocessing.image import ImageDataGenerator

imageGenerator = ImageDataGenerator(rescale=1./255,
                                    width_shift_range=0.1,
                                    height_shift_range=0.1,
                                    brightness_range=[.2,.2],
                                    horizontal_flip=True,
                                    rotation_range=15,
                                    shear_range=0.5,
                                    zoom_range=[0.8,2.0],
                                    vertical_flip=True,
                                    validation_split=.1)


trainGen = imageGenerator.flow_from_directory(os.path.join('/gdrive/My Drive/datasets_grouped/'),
                                              target_size=(224,224),
                                              shuffle=True,
                                              subset='training',
                                              class_mode='categorical')
validationGen = imageGenerator.flow_from_directory(os.path.join('/gdrive/My Drive/datasets_grouped/'),
                                              target_size=(224,224),
                                              shuffle=True,
                                              subset='validation',
                                              class_mode='categorical')


print(trainGen.class_indices)
N_TRAIN = trainGen.samples
N_TEST = validationGen.samples
N_CLASS = len(class_name)
print(N_TRAIN, N_TEST, N_CLASS)


for imagename in image_datas : 
  # print(imagename)
  image = Image.open(imagename)

  image = image.resize((224, 224))
  image = np.array(image)
  if image.shape == (224, 224, 3) :
      
          
      X.append(image)
      label = imagename.split('/')[4]
      label = dic[label]
      Y.append(label)
  else :
    print(imagename, image.shape)

X = np.array(X)
Y = np.array(Y)

np.save('/gdrive/My Drive/images_save', X) # images_save.npy
np.save('/gdrive/My Drive/labels_save', Y) # labels_save.npy

aa = {'chevrolet spark': 0, 'chevrolet trailblazer': 1, 'genesis g70': 2, 'genesis g80': 3, 'genesis g90': 4, 'hyundai avante': 5, 'hyundai casper': 6, 'hyundai grandeur': 7, 'hyundai kona': 8, 'hyundai palisade': 9, 'hyundai santafe': 10, 'hyundai sonata': 11, 'hyundai tucson': 12, 'hyundai venue': 13, 'kia carnival': 14, 'kia k3': 15, 'kia k5': 16, 'kia k8': 17, 'kia k9': 18, 'kia mohave': 19, 'kia morning': 20, 'kia ray': 21, 'kia seltos': 22, 'kia sorento': 23, 'kia sportage': 24, 'renault qm6': 25, 'renault sm6': 26, 'renault xm3': 27, 'ssangyong rexton': 28, 'ssangyong tivoli': 29, 'ssangyong torres': 30}
labels=list(aa.keys())
print(labels)

from sklearn.utils import class_weight 
import numpy as np

class_weights = class_weight.compute_class_weight(class_weight ='balanced',classes = np.unique(trainGen.classes), y = trainGen.classes)


train_class_weights = dict(enumerate(class_weights))

# 저장한 데이터 배열 파일 로드
# X = np.load('/gdrive/My Drive/images_save.npy')
# Y = np.load('/gdrive/My Drive/labels_save.npy')


# class_name = np.load('/gdrive/My Drive/class_name.npy')
# dic = np.load('./dic.npy')

#test, train 이미지 분류

train_images, test_images, train_labels, test_labels = train_test_split(X, Y, test_size=0.1, shuffle = True, random_state = 2)

train_labels = train_labels[..., tf.newaxis]
test_labels = test_labels[..., tf.newaxis]

train_images.shape, train_labels.shape, test_images.shape, test_labels.shape

N_TRAIN = train_images.shape[0]
N_TEST = test_images.shape[0]
N_CLASS = len(np.unique(Y))

print(N_TRAIN, N_TEST, N_CLASS)

# # 클래스별 이미지 개수 확인 (train 이미지)
unique, counts = np.unique(np.reshape(train_labels, (N_TRAIN,)), axis=-1, return_counts=True)

keys = dict(zip(unique, counts)).keys()
values = dict(zip(unique, counts)).values()
# print(keys)
# print(values)
plt.bar(keys, values)
plt.show()

# 클래스별 이미지 개수 확인 (test 이미지)
unique, counts = np.unique(np.reshape(test_labels, (N_TEST,)), axis=-1, return_counts=True)
keys = dict(zip(unique, counts)).keys()
values = dict(zip(unique, counts)).values()
# print(keys)
# print(values)
plt.bar(keys, values)
plt.show()

# #입력 데이터 시각화
plt.figure(figsize=(N_CLASS,80))
for i in range(N_CLASS) : 
  img_idx = np.random.randint(0,N_TRAIN)
  plt.subplot(11,6,i+1)
  plt.xticks([])
  plt.yticks([])
  plt.grid(False)
  plt.imshow(train_images[img_idx])
  plt.xlabel(class_name[train_labels[img_idx][0]])

# #기존 0~255 값을 가지던 픽셀값을 0~1사이 범위로 조정
train_images = train_images.astype(np.float32) / 255.
test_images = test_images.astype(np.float32) / 255.

train_labels = keras.utils.to_categorical(train_labels)
test_labels = keras.utils.to_categorical(test_labels)

print("train image, label shape")
print(train_images.shape, train_labels.shape)
print("test image, label shape")
print(test_images.shape, test_labels.shape)

#체크포인트 설정
checkpoint_path = "/gdrive/My Drive/training_1/cp.ckpt"
checkpoint_dir = os.path.dirname(checkpoint_path)

# 모델의 가중치를 저장하는 콜백 만들기
# cp_callback = tf.keras.callbacks.ModelCheckpoint(filepath=checkpoint_path,
#                                                  save_weights_only=True,
#                                                  verbose=1)

#early stop callback
# earlyStop = tf.keras.callbacks.EarlyStopping(
#     monitor='val_loss', min_delta=0, patience=50, verbose=0, mode='auto',
#     baseline=None, restore_best_weights=False
# )

# learing rate callback
# lr = tf.keras.callbacks.ReduceLROnPlateau(
#     monitor='val_loss', factor=0.98, patience=5, verbose=1, mode='auto',
#     min_delta=0.0001, cooldown=0, min_lr=0.0008,
# )

# cos_decay_ann = tf.keras.experimental.CosineDecayRestarts(initial_learning_rate=0.001, first_decay_steps=10, t_mul=1, m_mul=0.9, alpha=0)

# #train 이미지, test 이미지 나눴던걸 이용해서 데이터셋 구성
# train_dataset = tf.data.Dataset.from_tensor_slices((train_images, train_labels)).shuffle(buffer_size=N_TRAIN).batch(N_BATCH).repeat()
# test_dataset = tf.data.Dataset.from_tensor_slices((test_images, test_labels)).batch(N_BATCH)

# # train_dataset
# # test_dataset

steps_per_epoch = N_TRAIN//N_BATCH
validation_steps = N_TEST//N_BATCH
# # print(steps_per_epoch)
# # print(validation_steps)

#모델 생성
from keras.applications import ResNet50
from keras.layers import Dropout

def create_model():
  model = keras.Sequential()
  model.add(ResNet50(include_top=True,  input_shape=(224, 224, 3), weights=None, classes=N_CLASS))
  return model

model = create_model()
model.compile(optimizer=tf.keras.optimizers.Adam(learning_rate), loss='categorical_crossentropy', metrics=['accuracy'])
model.summary()

model2 = keras.models.load_model('/gdrive/My Drive/keras888.h5')
model2.summary()

# predictions = model.predict(trainGen);
predictions = model.predict(trainGen);

print(predictions[0])

# confusion matrix 사용을 위한 라이브러리
from sklearn.metrics import confusion_matrix
from itertools import product

# confusion matrix 그리는 함수 
def plot_confusion_matrix(con_mat, labels, title='Confusion Matrix', cmap=plt.cm.get_cmap('Blues'), normalize=False):
    plt.figure(figsize=(50, 50))
    plt.imshow(con_mat, interpolation='nearest', cmap=cmap)
    plt.title(title)
    plt.colorbar()
    marks = np.arange(len(labels))
    nlabels = []
    for k in range(len(con_mat)):
        n = sum(con_mat[k])
        nlabel = '{0}(n={1})'.format(labels[k],n)
        nlabels.append(nlabel)
    plt.xticks(marks, labels)
    plt.yticks(marks, nlabels)

    thresh = con_mat.max() / 2.
    if normalize:
        for i, j in product(range(con_mat.shape[0]), range(con_mat.shape[1])):
            plt.text(j, i, '{0}%'.format(con_mat[i, j] * 100 / n), horizontalalignment="center", color="white" if con_mat[i, j] > thresh else "black")
    else:
        for i, j in product(range(con_mat.shape[0]), range(con_mat.shape[1])):
            plt.text(j, i, con_mat[i, j], horizontalalignment="center", color="white" if con_mat[i, j] > thresh else "black")
    # plt.tight_layout()
    plt.ylabel('True label')
    plt.xlabel('Predicted label')
    plt.show()

aa = {'chevrolet spark': 0, 'chevrolet trailblazer': 1, 'genesis g70': 2, 'genesis g80': 3, 'genesis g90': 4, 'hyundai avante': 5, 'hyundai casper': 6, 'hyundai grandeur': 7, 'hyundai kona': 8, 'hyundai palisade': 9, 'hyundai santafe': 10, 'hyundai sonata': 11, 'hyundai tucson': 12, 'hyundai venue': 13, 'kia carnival': 14, 'kia k3': 15, 'kia k5': 16, 'kia k8': 17, 'kia k9': 18, 'kia mohave': 19, 'kia morning': 20, 'kia ray': 21, 'kia seltos': 22, 'kia sorento': 23, 'kia sportage': 24, 'renault qm6': 25, 'renault sm6': 26, 'renault xm3': 27, 'ssangyong rexton': 28, 'ssangyong tivoli': 29, 'ssangyong torres': 30}
labels=list(aa.keys())

# 예측값과 참값 
pred_labels = np.argmax(predictions, axis=1)
true_labels = trainGen.labels;

#메인 실행 
confusion_matrix = confusion_matrix(true_labels, pred_labels)
plot_confusion_matrix(confusion_matrix, labels=labels, normalize=True)

# model = create_model()
# checkpoint_path="/gdrive/My Drive/training_1/cp.ckpt"
# # model.save_weights(checkpoint_path.format(epoch=0))
# model3 = model.load_weights(checkpoint_path.format(epoch=0))

# csv_logger = CSVLogger('/gdrive/My Drive/training_1/cp.ckpt', append=True, separator=';')


#모델 학습 및 평가, 저장
history = model2.fit(trainGen, epochs=N_EPOCHS, steps_per_epoch=steps_per_epoch, validation_data=validationGen,validation_steps=validation_steps, class_weight=train_class_weights)

# !mkdir -p saved_model
model2.save('/gdrive/My Drive/saved_model')
# model.save('./saved_model/my_model')

model2.evaluate(validationGen)

# 훈련 과정 시각화 (정확도)
plt.plot(history.history['accuracy'])
plt.plot(history.history['val_accuracy'])
plt.title('Model accuracy')
plt.xlabel('Epoch')
plt.ylabel('Accuracy')
plt.legend(['Train', 'Test'], loc='upper left')
plt.show()

# 훈련 과정 시각화 (손실)
plt.plot(history.history['loss'])
plt.plot(history.history['val_loss'])
plt.title('Model loss')
plt.xlabel('Epoch')
plt.ylabel('Loss')
plt.legend(['Train', 'Test'], loc='upper left')
plt.show()

from sklearn.metrics import confusion_matrix

# confusion matrix 그리는 함수 
def plot_confusion_matrix(con_mat, labels, title='Confusion Matrix', cmap=plt.cm.get_cmap('Blues'), normalize=False):
    plt.imshow(con_mat, interpolation='nearest', cmap=cmap)
    plt.title(title)
    plt.colorbar()
    marks = np.arange(len(labels))
    nlabels = []
    for k in range(len(con_mat)):
        n = sum(con_mat[k])
        nlabel = '{0}(n={1})'.format(labels[k],n)
        nlabels.append(nlabel)
    plt.xticks(marks, labels)
    plt.yticks(marks, nlabels)

    thresh = con_mat.max() / 2.
    if normalize:
        for i, j in itertools.product(range(con_mat.shape[0]), range(con_mat.shape[1])):
            plt.text(j, i, '{0}%'.format(con_mat[i, j] * 100 / n), horizontalalignment="center", color="white" if con_mat[i, j] > thresh else "black")
    else:
        for i, j in itertools.product(range(con_mat.shape[0]), range(con_mat.shape[1])):
            plt.text(j, i, con_mat[i, j], horizontalalignment="center", color="white" if con_mat[i, j] > thresh else "black")
    plt.tight_layout()
    plt.ylabel('True label')
    plt.xlabel('Predicted label')
    plt.show()

# 예측값과 참값 
pred_labels = np.argmax(predictions, axis=1)
true_labels = test_set.labels

#메인 실행 
confusion_matrix = confusion_matrix(true_labels, pred_labels)
plot_confusion_matrix(confusion_matrix, labels=labels, normalize=True)

# 이미지별 정확도 확인
def plot_image(i, predictions_array, true_label, img) :
  predictions_array, true_label, img = predictions_array[i], true_label[i], img[i]
  plt.grid(False)
  plt.xticks([])
  plt.yticks([])

  plt.imshow (img)

  predicted_label = np.argmax(predictions_array)
  if predicted_label == true_label :
    color ='blue'
  else :
    color = 'red'

  plt.xlabel("{} {:2.0f}% ({})".format(class_name[predicted_label],
  100*np.max(predictions_array),
  class_name[true_label]),
  color=color)

def plot_value_array(i, predictions_array, true_label) :
  predictions_array, true_label = predictions_array[i], true_label[i]
  plt.grid(False) 
  #plt.xticks ([1])
  plt.xticks(range(N_CLASS) ,class_name, rotation=90)
  plt.yticks([])
  thisplot = plt.bar(range(N_CLASS), predictions_array, color="#777777")
  plt.ylim([0, 1])
  predicted_label = np.argmax(predictions_array)

  thisplot[predicted_label].set_color('red')
  thisplot[true_label].set_color('blue')

rnd_idx = np.random.randint(1, N_TEST//N_BATCH)
img_cnt = 0
for images, labels in validationGen :
  img_cnt += 1
  if img_cnt != rnd_idx:
    continue
  predictions = model(images, training=False)
  num_rows = 32
  num_cols = 2
  num_images = num_rows*num_cols
  labels = tf.argmax(labels, axis=-1)
  plt.figure(figsize=(3*2*num_cols, 4*num_rows))
  plt.subplots_adjust(hspace=1.0)

  for i in range(num_images) :
    plt.subplot(num_rows, 2*num_cols, 2*i+1)
    # plot_image(i, predictions.numpy(), labels.numpy() , images.numpy())
    plot_image(i, predictions, labels , images)

    plt.subplot(num_rows, 2*num_cols, 2*i+2)
    plot_value_array(i, predictions.numpy(), labels.numpy())
  break