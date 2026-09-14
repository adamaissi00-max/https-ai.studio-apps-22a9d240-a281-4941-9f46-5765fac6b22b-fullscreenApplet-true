import { CartItem, OrderCustomerInfo } from './types';
import { STORE_NAME, STORE_ADDRESS, STORE_PHONE, STORE_WHATSAPP } from './data/products';

export function formatDZD(amount: number): string {
  return `${amount.toLocaleString('ar-DZ')} دج`;
}

export function generateWhatsAppMessage(
  items: CartItem[],
  customerInfo: OrderCustomerInfo,
  totalPrice: number
): string {
  const itemsText = items
    .map(
      (item, idx) =>
        `${idx + 1}. ${item.product.name} (${item.product.unit}) × ${item.quantity} = ${item.product.price * item.quantity} دج`
    )
    .join('\n');

  const neighborhoodText = customerInfo.neighborhood
    ? `📍 الحي: ${customerInfo.neighborhood}`
    : '';
  const detailedAddressText = customerInfo.detailedAddress
    ? `🏠 العنوان بالتفصيل: ${customerInfo.detailedAddress}`
    : '';
  const notesText = customerInfo.notes ? `📝 ملاحظات: ${customerInfo.notes}` : '';

  const message = `السلام عليكم ورحمة الله وبركاته،
أود تقديم طلبية من متجر "${STORE_NAME}" (${STORE_ADDRESS}):

🛒 *قائمة المشتريات:*
${itemsText}

----------------------------
💵 *المجموع الإجمالي للمنتجات:* ${totalPrice} دج
🛵 *التوصيل:* بواسطة دراجة نارية / سيارة (داخل مدينة أفلو)
🤝 *طريقة الدفع:* نقداً عند الاستلام

👤 *بيانات الزبون والتوصيل في أفلو:*
👤 الاسم: ${customerInfo.name || 'زبون المتجر'}
📞 الهاتف: ${customerInfo.phone || 'نفس رقم الواتساب'}
${neighborhoodText}
${detailedAddressText}
${notesText}

يرجى تأكيد استلام الطلب وموعد التوصيل. بارك الله فيكم!`;

  return message;
}

export function getWhatsAppUrl(
  items: CartItem[],
  customerInfo: OrderCustomerInfo,
  totalPrice: number
): string {
  const message = generateWhatsAppMessage(items, customerInfo, totalPrice);
  return `https://wa.me/${STORE_WHATSAPP}?text=${encodeURIComponent(message)}`;
}
