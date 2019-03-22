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
        'class' => 'anlewo\tabgridview\Module'
    ]
]
```

# 调用方式 
```php
<?=\anlewo\tabgridview\TabGridViewWidget::widget([
    'tabArray' => [
        [
            'title'=>'自定义标题1',
            'columns' => $columns,
            'searchClass' => 'admin\Modules\Index\models\SearchOrder'
        ],
        [
            'title'=>'自定义标题2',
            'columns' => $columns1,
            'searchClass' => 'admin\Modules\Index\models\SearchOrder1'
        ],
    ]
]);?>
```


需要配置RBAC路由：/tabGridView/index/index

需要配置引导文件：/vendor/yiisoft/extensions.php
```php
    'anlewo/yii2-widget-tabgridview' =>
    array(
        'name' => 'anlewo/yii2-widget-tabgridview',
        'version' => '1.0',
        'alias' =>
        array(
            '@anlewo/tabgridview' => $vendorDir . '/anlewo/yii2-widget-tabgridview/src',
        ),
    ),
```
