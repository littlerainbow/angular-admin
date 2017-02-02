/**
 * Created by Artsiom_Papou on 1/28/2017.
 */
export default function CtrlAdder($resource, $scope, $http){
    $scope.article = {};
    //$resource('http://localhost:3030/admin/articles', )
    $scope.sendForm = function(e) {
        console.log(e);
        $http({
            method  : 'POST',
            url     : 'http://localhost:3030/admin/articles',
            data    : $scope.article,
            headers: undefined
            });
    }
    // $scope.sendForm = function() {
    //     console.log(this)
    //     // $resource('http://localhost:3030/admin/articles/', $scope.article, {
    //     //     update: {
    //     //         method: 'PUT' //Без этого не будет работать обновление объектов на стороне сервера,
    //     //         //если используется Django REST Framework
    //     //     }
    //     // })
    // }
}
