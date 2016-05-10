function DoCustomValidation()
{
  var frm = document.forms["myform"];
  if(frm.pwd1.value != frm.pwd2.value)
  {
    sfm_show_error_msg('The Password and verified password does not match!',frm.pwd1);
    return false;
  }
  else
  {
    return true;
  }
}
