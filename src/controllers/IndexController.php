<?php
/**
 * Created by PhpStorm.
 * User: mac
 * Date: 2019/3/21
 * Time: 下午4:01
 */
namespace anlewo\tabgridview\controllers;

use admin\Modules\Index\models\SearchOrder;

class IndexController extends BaseController
{
    public function actionIndex()
    {
        $request = \Yii::$app->request->get();
        $gridViewColumns = $request['gridViewColumns'];
        $searchClass = $request['searchClass'];
        $searchModel = new $searchClass;
        $searchModel->load(\Yii::$app->request->get());
        $dataProvider = $searchModel->search();
        return $this->renderAjax('Gridview',[
            'searchModel'=>$searchModel,
            'dataProvider' => $dataProvider,
            'gridViewColumns' => $gridViewColumns,
        ]);
    }
}
