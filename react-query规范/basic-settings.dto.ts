/**
 * 后端返回的订单基础设置配置
 */
export interface BasicSettingsDto {
  automatic_delivery: boolean;
  tip_time: string | number;
  newshop_time: number;
  shoprise_time: number;
  Shopnova_time: number;
  Funvalue_time: number;
  manual_number: string;
  resend_custom_content: string;
  resend_custom_type: string;
  to_split_custom_content: string;
  to_split_custom_type: string;
  sku: string[];
  order_reissue_payment_time: string;
  flag_shipping_defaults: string[];
  order_resend_default_settings: string[];
  emails: string;
  emails_password: string;
}
export interface UpdateParamsModel extends Omit<BasicSettingsDto, "automatic_delivery"> {
  automatic_delivery: boolean;
}
