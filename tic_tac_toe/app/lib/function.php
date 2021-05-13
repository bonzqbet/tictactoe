<?php

function print_pre($expression, $return = false, $wrap = false)
{
    $css = 'border:1px dashed #06f;background:#69f;padding:1em;text-align:left;z-index:99999;font-size:12px;position:relative';
    if ($wrap) {
        $str = '<p style="' . $css . '"><tt>' . str_replace(
        array('  ', "\n"),
        array('&nbsp; ', '<br />'),
        htmlspecialchars(print_r($expression, true))
        ) . '</tt></p>';
    } else {
        $str = '<pre style="' . $css . '">' . print_r($expression, true) . '</pre>';
    }
    if ($return) {
        if (is_string($return) && $fh = fopen($return, 'a')) {
        fwrite($fh, $str);
        fclose($fh);
        }
        return $str;
    } else
        echo $str;
}

function DateFormat($DateTime) {
    //#################################################
        global $core_session_language;
        $DateTime = date("Y-m-d H:i", strtotime($DateTime));
    
        $DateTimeArr = explode(" ", $DateTime);
        $Date = $DateTimeArr[0];
        $Time = $DateTimeArr[1];
    
        $DateArr = explode("-", $Date);
    
        if ($core_session_language == "Thai")
            $DateArr[0] = ($DateArr[0] + 543);
    
        return $DateArr[2] . "/" . $DateArr[1] . "/" . $DateArr[0] . " " . $Time;
    }


?>