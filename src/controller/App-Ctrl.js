/**
 * Created by Artsiom_Papou on 1/28/2017.
 */
export default function AppCtrl($resource, articlesCount){
    $resource('http://localhost:3030/articles')
        .query(null,(data) => {
            this.articles = data;
            this.count = articlesCount.getLength(data);
        })
}
