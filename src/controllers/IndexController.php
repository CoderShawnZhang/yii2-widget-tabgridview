<?php
/**
 * Created by PhpStorm.
 * User: mac
 * Date: 2019/3/21
 * Time: 下午4:01
 */
namespace anlewo\tabgridview\controllers;

use anlewo\tabgridview\controllers\BaseController;
use admin\Modules\Index\models\SearchOrder;

class IndexController extends BaseController
{
    public function actionIndex($tabId)
    {
        $searchModel = new \Yii::$app->controller->module->getListSearchModel;
        $dataProvider = new \Yii::$app->controller->module->getDataProvider.'()';
        $searchModel->load(\Yii::$app->request->get());
        $dataProvider = $searchModel->$dataProvider;
        return $this->renderAjax('Gridview',[
            'searchModel'=>$searchModel,
            'dataProvider' => $dataProvider,
        ]);
    }
}
