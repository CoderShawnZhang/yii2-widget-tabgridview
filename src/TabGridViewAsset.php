<?php
/**
 * Created by PhpStorm.
 * User: mac
 * Date: 2019/3/21
 * Time: 下午4:47
 */

namespace anlewo\tabgridview;

use yii\web\AssetBundle;

class TabGridViewAsset extends AssetBundle
{
    public $sourcePath = '@anlewo/tabgridview/assets';

    public $css = [
        'css/style.css',
    ];

    public $js = [
        'js/fixedHead.js',
        'js/request.js',
    ];

    public $depends = [];
}
