<div class="box-header"></div>
<div class="box box-solid no-mb">
    <?php
    $columns = \anlewo\tabgridview\views\index\listColumns::getColumns($searchModel);
    $item = [
        'id' => 'state'.Yii::$app->request->get('tabId',1),
        'pjax' => false,
        'dataProvider' => $dataProvider,
        'tableOptions' => ['class' => 'table table-striped table-bordered table-fixed table-index-list'],
        'layout' => '{items}<div class="box-footer clearfix"><div class="pull-right">{pager}</div></div>',
        'pager' => [
            'class' => 'anlewo\tabgridview\widgets\LinkPager',
            'template' => '<div class="box-footer clearfix pagination-box"><div class="pull-right"><div class="form-inline">{summary}{pageButtons}</div></div></div>',
        ],
        'columns'=>$columns
    ];
    echo kartik\grid\GridView::widget($item);
    ?>
</div>
