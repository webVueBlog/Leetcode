app.use((req, res, next) => {
    const startTime = new Date()

    res.once('close', () => { // 监听请求结束事件
        const endTime = new Date()
        log.info(formatLog(req, startTime, endTime - startTime))
    })

    if (req.url == '/') { // 将 index.html 设为 no-cache
        res.setHeader('Cache-control', 'no-cache')
    }

    next()
})