# TabGridViewWidget

一个封装了tab选项卡异步加载gridview的插件

api接口文档扩展插件图片鉴赏
![](https://github.com/CoderShawnZhang/apiview/blob/master/img/1.png)
![](https://github.com/CoderShawnZhang/apiview/blob/master/img/2.png)
![](https://github.com/CoderShawnZhang/apiview/blob/master/img/3.png)

# 使用方式：
```php
composer require --prefer-dist anlewo/yii2-widget-tabgridview dev-master
```
# 配置方式
在main.php文件下的modules加入
```php
"modules" => [
    'tabGridView' => [
        'class' => 'anlewo\tabgridview\Module',
        'getListSearchModel' => 'admin\Modules\Index\models\SearchOrder'//指定查询模型（加载gridview数据时查询）
    ]
]
```

# 调用方式 
```php
<?=\anlewo\tabgridview\TabGridViewWidget::widget([
    'tabArray' => [1=>'自定义标题1',2=>'自定义标题2',3=>'自定义标题3',4=>'自定义标题4',5=>'自定义标题5',6=>'自定义标题6',7=>'自定义标题7',8=>'自定义标题8'],
]);?>
```


