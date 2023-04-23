import { BasicSettingsDto } from './basic-settings.dto';
export class BasicSettingsService {
  defaultBasicSettings: BasicSettingsDto = {
    automatic_delivery: 0, // 超期自动转已发货
    tip_time: '', // 发货到期提前提醒 12 小时
    newshop_time: 180,
    shoprise_time: 180,
    Shopnova_time: 180,
    Funvalue_time: 180,
    manual_number: '7435734535（系统生成）', // 手工订单编号
    resend_custom_content: '', // 重发订单编号
    resend_custom_type: '数字', // // 默认数字  数字和字母 两个选项
    to_split_custom_content: '', // 拆分订单编号
    to_split_custom_type: '数字', // 默认数字  数字和字母 两个选项
    sku: ['待处理', '可配货', '发货中'], //  SKU未发货量：可勾选异常订单、待处理、可配货、发货中，默认勾选待处理、可配货、发货中
    order_reissue_payment_time: '原始订单付款时间', //  订单重发付款时间  默认选中原始订单付款时间
    flag_shipping_defaults: [], // 标记发货默认设置
    order_resend_default_settings: [], // 订单重发默认设置
    emails: '', // 邮箱账号
    emails_password: '', // 邮箱密码
  };

  /**
   *  获取订单基础配置
   */
  async getConfig(): Promise<Promise<BasicSettingsDto>> {
    return this.defaultBasicSettings;
  }
  /**
   *  更新订单基础配置
   */
  async update(params: BasicSettingsDto): Promise<Promise<BasicSettingsDto>> {
    this.defaultBasicSettings = params;
    return params;
  }
}

export const basicSettingsService = new BasicSettingsService();
