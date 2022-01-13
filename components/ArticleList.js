import React from 'react'
import articleListStyles from '../styles/Article.module.css';
import ArticleItem from './ArticleItem';

const ArticleList = ({articles}) => {
	return (
		<div className={articleListStyles.grid}>
			{articles.map(article => <ArticleItem key={article.id} article={article} />)}
		</div>
	)
}

export default ArticleList
