import '../styles/loading.css'

const Loading = () => 
    <div className="card card-body loading">
        <div className="spinner-border text-info loading-spinner" role="status"/>
        <h3 className="card-title loading-text">Fetching quiz...</h3>
        {/* <p className="loading-text">Gathering parameters...</p> */}
        {/* {
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
                document.getElementsByClassName('loading-text')[0].innerHTML = "Stowing tray tables...";
            },15000)
        }
        {
            setTimeout(function(){
                document.getElementsByClassName('loading-text')[0].innerHTML = "Igniting engines...";
            },20000)
        } */}
        {/* {
            setTimeout(function(){
                document.getElementsByClassName('loading-text')[0].innerHTML = "Taxying runway...";
            },25000)
        } */}
    </div>

export default Loading;