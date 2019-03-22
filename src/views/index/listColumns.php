<?php
namespace anlewo\tabgridview\views\index;

use kartik\grid\GridView;
use kartik\select2\Select2;
use yii\helpers\Html;
use yii\helpers\Url;

class listColumns
{
    public static function getColumns($searchModel){
        $columns = [
            [
                'class' => 'yii\grid\CheckboxColumn',
                'headerOptions' => ['width' => '30'],
                'name' => 'id',
                'checkboxOptions' => function ($model, $key, $index, $column) {
                    return ['value' => $model->id];
                },
            ],
            [
                'attribute' => 'id',
                'header'=>'用户编号',
                'format' => 'raw',
                'headerOptions' => ['width' => '100'],
                'value' => function($model){
                    return $model->id;
                },
                'filter' => Select2::widget([
                    'model' => $searchModel,
                    'attribute' =>'id',
                    'data' => [''=>'无',1=>1,2=>2,3=>3]
                ])
            ],
            [
                'attribute' => 'name',
                'header' => '名称',
                'headerOptions' => ['width' => '150'],
                'value' => function($model){
                    return $model->name;
                }
            ],
            [
                'attribute' => 'name',
                'header' => '加盟商',
                'headerOptions' => ['width' => '180'],
                'value' => function(){
                    return '广东惠州惠东县级店';
                }
            ],
            [
                'attribute' => 'name',
                'header' => '加盟商',
                'value' => function(){
                    return '广东惠州惠东县级店';
                }
            ],
            [
                'class' => 'kartik\grid\EditableColumn',
                'attribute' => 'name',
                'filter' => false,
                'header' => '接单员备注',
                'headerOptions' => ['class' => 'th-w200'],
                'editableOptions' => [
                    'size' => 'md',
                    'inputType' => \kartik\editable\Editable::INPUT_TEXT,
                    'formOptions' => ['action' => ['edit-name']],
                    'placement' => \kartik\popover\PopoverX::ALIGN_BOTTOM_RIGHT,
                    'showButtonLabels' => true,
                    'submitButton' => [
                        'icon' => '<i class="fa fa-save"></i>',
                        'label' => '保存',
                        'class' => 'btn btn-sm btn-primary',
                    ],
                ],
            ],
            [
                'attribute' => 'name',
                'header' => '订单类型',
                'headerOptions' => ['width' => '180'],
                'format' => 'raw',
                'value' => function(){
                    return Html::tag('span','售后订单',['class'=>'label label-bg-blue label-tag']);
                }
            ],
        ];
        return $columns;
    }
}
