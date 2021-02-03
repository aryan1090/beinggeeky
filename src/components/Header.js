import React,{useState} from 'react'
export function Header() {

    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
    return (
        
        <nav class="navbar bg-dark navbar-dark navbar-expand-lg fixed-top">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
                <span class="navbar-toggler-icon"></span>
            </button>
            <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item mx-1"><a href="#beinggeeky" class="nav-link">Being Geeky</a></li>
                    <li class="nav-item mx-1"><a href="#tutorial" class="nav-link">Tutorial</a></li>
                    <li class="nav-item mx-1"><a href="#video" class="nav-link">Video</a></li>
                    <li class="nav-item mx-1"><a href="#coupons" class="nav-link">Coupons</a></li>
                </ul>
            </div>
        </nav>
    )
}

