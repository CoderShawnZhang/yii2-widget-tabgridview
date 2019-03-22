<?php
/**
 * Created by PhpStorm.
 * User: mac
 * Date: 2019/3/21
 * Time: 下午2:34
 */
namespace anlewo\tabgridview;

class Module extends \yii\base\Module
{
    /**
     * @inheritdoc
     */
    public $controllerNamespace = 'anlewo\tabgridview\controllers';

    public $getListSearchModel = '';

    /**
     * @inheritdoc
     */
    public function init()
    {
        parent::init();
    }
}
