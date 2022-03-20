
/**
 * 客户： ESTABLISHED 建立状态， FIN-WAIT-1 终止等待1 FIN-WAIT-2 终止等待2 TIME-WAIT时间等待 CLOSED
 * 
 * 服务器 ESTABLISHED  CLOSE-WAIT关闭等待 LAST-ACK最后确认 CLOSED
 * 
 * 客户 主动关闭 等待2MSL
 * 
 * 服务器： 通知应用程序 被动关闭 
 * 
 * 客户 - 数据传送 - 服务器
 * 
 * 1. 客户 发送 FIN=1，seq=u 到 服务器
 * 2. 服务器 发送 ACK=1， seq= v ack = u+1
 * 3. 服务器 发送 FIN= 1 ACK=1 seq = w, ack = u+1
 * 4. 客户： 发送 ACK = 1， seq=u+1, ack = w+1
 */

