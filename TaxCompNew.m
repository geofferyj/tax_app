format short
clc
%x=input('Input Annual Income Threshold: ');
x=304347;
y=input('Input Annual Income: ');
z= 200000;
tax1= 300000;
tax2= 300000;
tax3= 500000;
tax4= 500000;
tax5= 1600000;
tax6= 3200000;
if y<=x 
    cra=(z+0.2*y)
    ci=(y-cra)
    icp=0.01*y
    return
end
if y>x & y<20000000
    if y-tax1-tax2<=0
        cra=(z+0.2*y)
        ci=(y-cra)
        icp=ci*0.07
        return
    end
    if y<=1000000
        cra=(z+0.2*y)
        ci=(y-cra)
        icp=(tax1*.07)+((ci-tax2)*.11)
        return
    end
    if y>1000000 & y<=1625000
        cra=(z+0.2*y)
        ci=(y-cra)
        tax=tax1+tax2;
        icp=(tax1*.07)+(tax2*.11) +((ci-tax)*.15)
        return
    end
    if y>1625000 & y<=2250000 
        cra=(z+0.2*y)
        ci=(y-cra)
        tax11=tax5-tax4
        icp=(tax1*.07)+(tax2*.11)+(tax3*.15)+((ci-tax11)*.19)
        return
    end
    if y>2250000 & y<=4265624
        cra=(z+0.2*y)
        ci=(y-cra)
        icp=(tax1*.07)+(tax2*.11)+(tax3*.15)+(tax4*.19)+((ci-tax5)*.21)
        return
    end
    if y>4265624 & y<20000000
        cra=(z+0.2*y)
        ci=(y-cra)
        icp=(tax1*.07)+(tax2*.11)+(tax3*.15)+(tax4*.19)+(tax5*.21)+((ci-tax6)*.24)
        return
    end
else
    cra=((0.01*y)+(0.2*y))
    ci=(y-cra)
    icp=(tax1*.07)+(tax2*.11)+(tax3*.15)+(tax4*.19)+(tax5*.21)+((ci-tax6)*.24)
end
