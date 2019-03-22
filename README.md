# TabGridViewWidget

一个封装了tab选项卡异步加载gridview的插件

api接口文档扩展插件图片鉴赏
![](https://github.com/CoderShawnZhang/yii2-widget-tabgridview/blob/master/img/1.png)

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
        'getDataProvider' => 'getDataProvider'//上面模型返回dataprovider的方法名称(默认search,可以不设置使用默认)
    ]
]

敲黑板，画重点。getDataProvider AR要定义一个getDataProvider方法返回dataprovider
```

# 调用方式 
```php
<?=\anlewo\tabgridview\TabGridViewWidget::widget([
    'tabArray' => [1=>'自定义标题1',2=>'自定义标题2',3=>'自定义标题3',4=>'自定义标题4',5=>'自定义标题5',6=>'自定义标题6',7=>'自定义标题7',8=>'自定义标题8'],
]);?>
```


需要配置路由：/tabGridView/index/index


