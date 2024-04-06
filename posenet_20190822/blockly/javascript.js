Blockly.JavaScript['posenet_video'] = function(block) { 
  var value_width_ = Blockly.JavaScript.valueToCode(block, 'width_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_height_ = Blockly.JavaScript.valueToCode(block, 'height_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_video_ = block.getFieldValue('video_');
  var value_skeleton_ = block.getFieldValue('skeleton_');
  var value_persons_ = block.getFieldValue('persons_');
  var value_scorelimit_ = block.getFieldValue('scorelimit_');
  var value_mirrorimage_ = block.getFieldValue('mirrorimage_');
  var value_result_ = block.getFieldValue('result_');
  var value_opacity_ = block.getFieldValue('opacity_');
  var code = 'posenet_video(' + value_width_ + ',' + value_height_ + ',"' + value_persons_ + '","' + value_scorelimit_ + '","' + value_mirrorimage_ + '","' + value_result_ + '","' + value_skeleton_ + '","' + value_opacity_ + '","' + value_video_ + '");\n';
  return code;
};

Blockly.JavaScript['posenet_list'] = function(block) { 
  var code = 'posenet_list()';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['posenet_person'] = function(block) { 
  var value_person_ = Blockly.JavaScript.valueToCode(block, 'person_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_part_ = block.getFieldValue('part_');
  var value_data_ = block.getFieldValue('data_');
  var code = 'posenet_person(' + value_person_ + ',"' + value_part_ + '","' + value_data_ + '")';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['posenet_distance'] = function (block) {
  var value_x0_ = Blockly.JavaScript.valueToCode(block, 'x0_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y0_ = Blockly.JavaScript.valueToCode(block, 'y0_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x1_ = Blockly.JavaScript.valueToCode(block, 'x1_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y1_ = Blockly.JavaScript.valueToCode(block, 'y1_', Blockly.JavaScript.ORDER_ATOMIC);  
  var code = 'posenet_distance(' + value_x0_ + ',' + value_y0_ + ','+ value_x1_ + ',' + value_y1_ + ')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['posenet_angle'] = function (block) {
  var value_x0_ = Blockly.JavaScript.valueToCode(block, 'x0_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y0_ = Blockly.JavaScript.valueToCode(block, 'y0_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x1_ = Blockly.JavaScript.valueToCode(block, 'x1_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y1_ = Blockly.JavaScript.valueToCode(block, 'y1_', Blockly.JavaScript.ORDER_ATOMIC);  
  var code = 'posenet_angle(' + value_x0_ + ',' + value_y0_ + ','+ value_x1_ + ',' + value_y1_ + ')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['posenet_state'] = function(block) {
  var value_state_ = block.getFieldValue('state_');
  var code = 'posenet_state(' + value_state_ + ');\n';
  return code;
};

Blockly.JavaScript['posenet_video_position'] = function(block) { 
  var value_left_ = Blockly.JavaScript.valueToCode(block, 'left_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_top_ = Blockly.JavaScript.valueToCode(block, 'top_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'posenet_video_position(' + value_left_ + ',' + value_top_ + ');\n';
  return code;
};

Blockly.JavaScript['posenet_persons'] = function(block) { 
  var value_persons_ = block.getFieldValue('persons_');
  var code = 'posenet_persons("' + value_persons_ + '");\n';
  return code;
};