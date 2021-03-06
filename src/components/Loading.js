const Loading = () => 
    <div className="card card-body loading">
        <div className="spinner-border spinner-border-xl text-info" role="status"/>
        <p className="loading-text">Gathering parameters...</p>
        {
            setTimeout(function(){
                document.getElementsByClassName('loading-text')[0].innerHTML = "Fetching quiz...";
            },5000)

        }
        {
            setTimeout(function(){
                document.getElementsByClassName('loading-text')[0].innerHTML = "Shuffling questions...";
            },10000)

        }
        {
            setTimeout(function(){
                document.getElementsByClassName('loading-text')[0].innerHTML = "Igniting engines...";
            },15000)

        }
    </div>

export default Loading;