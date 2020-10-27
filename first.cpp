#include<bits/stdc++.h>
using namespace std;
int main() {
    int n;
    cin>>n;

    vector <pair<int,int>> vec;

    int input;
    for (int i = 0; i < n; ++i) {
        cin>>input;
        vec.push_back(make_pair(input,i+1));
    }

    sort(vec.begin(),vec.end());

    if(vec[0].first == vec[1].first) {
        cout<<"Still Rozdil"<<endl;
    }
    else {
        cout<<vec[0].second<<endl;
    }

}