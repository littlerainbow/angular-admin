/**
 * Created by Artsiom_Papou on 1/28/2017.
 */
export default function CtrlUpdater($resource, $scope){
    this.article = {};
    //$resource('http://localhost:3030/admin/articles', )
    this.sendForm = function(e) {
        //e.preventDefault();
        console.log(e);
        $http({
            method  : 'POST',
            url     : 'http://localhost:3030/admin/articles',
            data    : this.article,
            headers: undefined
        });
    };
}
