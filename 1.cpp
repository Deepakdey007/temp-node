#include<bits/stdc++.h>
using namespace std;
int main()
{
    vector<vector<int>>vec{
        {1,2,3,4,5,99},
        {6,7,8,9,10,98},
        {11,12,13,14,15,97},
        {16,17,18,19,20,96},
        {21,22,23,24,25,95},
        {26,27,28,29,30,94},
        {31,32,33,34,35,93}
    };
    int left,right;
    int top,bottom;
    left = 0;
    top = 0;
    right = vec[0].size();
    bottom = vec.size();
    int x = 3;
    while(left < right and top < bottom) {
        for(int i = left;i<right;i++) {
            cout<<vec[left][i]<<" ";
        }
        top++;
        for(int i=top;i<bottom;i++) {
            cout<<vec[i][right-1]<<" ";
        }
        // cout<<endl;
        right--;
        if(top < bottom-1) {
            for(int i=right-1;i>=left;i--) {
                cout<<vec[bottom-1][i]<<" ";
            }
            bottom--;

        }
        // cout<<endl;
        if(left < right){
            for(int i=bottom-1;i>=top;i--) {
                cout<<vec[i][left]<<" ";
            }
        left++;

        }
        // cout<<endl;
    }
}