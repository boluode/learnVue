const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: './src/main.js',
	output: {
		path: path.resolve(__dirname, '../dist'),
		filename: 'bundle.js'
		/* publicPath: 'dist/' */
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				// css-loader只负责加载 不负责将样式加载到DOM
				// style-loader 负责将样式加载到DOM
				// 从右向左读
				use: ['style-loader', 'css-loader']
			},
			{
			    test: /\.less$/,
			    use: [{
						loader: "style-loader" // creates style nodes from JS strings
			        }, {
			            loader: "css-loader" // translates CSS into CommonJS
			        }, {
			            loader: "less-loader" // compiles Less to CSS
					}
				]
			},
			{
			    test: /\.(png|jpg|gif|jpeg)$/,
			    use: [
			        {
			            loader: 'url-loader',
			            options: {
							// 图片小于limit 时，将图片编译成base64字符串格式
							// 图片大于limit时，使用file-loader加载
							limit: 8192,
							name: 'img/[name].[hash:8].[ext]'
			            }
			        }
			    ]
			},
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
				  	loader: 'babel-loader',
				  	options: {
						presets: ['es2015']
				  	}
				}
			},
			{
				test: /\.vue$/,
				use: ['vue-loader']
			}
		]
	},
	resolve: {
		alias: {
			'vue$': 'vue/dist/vue.esm.js'
		},
		extensions: ['.js', '.css', '.vue']
	},
	plugins: [
		new webpack.BannerPlugin('最终版权归菠萝所有'),
		new HtmlWebpackPlugin({
			template: 'index.html'
		})
	]
}