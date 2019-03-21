<?php
use yii\helpers\Url;
use yii\helpers\ArrayHelper;
$js = <<<JS
var _opt = {$opts};
JS;
$this->registerJs($js);
$this->registerJs($this->render('javascript/_index_script.js'));
?>
<div class="box box-solid no-mb">
    <ul class="nav nav-tabs" id="navTabs">
        <?php foreach ($tabArray as $key => $val): ?>
            <li>
                <a href="<?= Url::toRoute(ArrayHelper::merge(['/tabGridView/index/index', 'tabId' => $key],Yii::$app->request->get()))?>" data-target="#tab_<?= $key ?>"><?=$val?></a>
            </li>
        <?php endforeach; ?>
    </ul>
    <div class="tab-content">
        <?php foreach ($tabArray as $key => $val): ?>
            <div class="tab-pane" id="tab_<?= $key ?>"></div>
        <?php endforeach; ?>
    </div>
</div>
