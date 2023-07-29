//create web server

router.post('/add', auth, multer, commentController.createComment);
router.get('/all', auth, commentController.getAllComments);
router.get('/all/:id', auth, commentController.getOneComment);
router.put('/all/:id', auth, multer, commentController.modifyComment);
router.delete('/all/:id', auth, commentController.deleteComment);

//export routes
module.exports = router;