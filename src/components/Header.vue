<template>
    <nav class="navbar navbar-expand-md fixed-top">
        <b-img class="logo" src="logo1.jpg" rounded="circle"  fluid alt="Responsive image"></b-img>
        <div class="collapse navbar-collapse " id="navbarCollapse" >
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <router-link class="nav-link" to="/">首页</router-link>
                </li>
                <li class="nav-item">
                     <router-link class="nav-link" to="/software">软件介绍</router-link>
                </li>
                <li class="nav-item">
                     <router-link class="nav-link" to="/teamwork">合作方</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<style scoped>
    .navbar{
        background-color: rgb(202, 177, 181);
        color: white;
    }
    .logo{
        width: 60px;
        height: 60px;
    }
    .nav-item{
        padding:2px;
        margin-left: 7px;
    }
    .nav-link{
        color: white;
    }

</style>