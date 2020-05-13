module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define('Post', {
      mensagem: DataTypes.STRING
    });  

    Post.associate = models => {
      
      Post.belongsTo(models.PostCategoria, {
        foreignKey: 'categoria_id',
        as: 'categoria'
      });

      Post.belongsTo(models.Usuario, {
        foreignKey: 'usuario_id',
        as: 'usuario'
      });
      
    };
  
    return Post;
  };