<?php
/**
 * Created by PhpStorm.
 * User: mac
 * Date: 2019/3/21
 * Time: 下午2:36
 */
namespace anlewo\tabgridview;

use yii\base\Widget;

class TabGridViewWidget extends Widget
{
    public $tabArray;

    public $opts;


    public function init()
    {
        $this->opts = \yii\helpers\Json::htmlEncode([
            'defaultTab' => 0,
        ]);
        parent::init();
    }

    public function run()
    {
        TabGridViewAsset::register($this->view);
        return $this->render('tab',[
            'tabArray' => $this->tabArray,
            'opts' => $this->opts
        ]);
    }
}
