//StringArrayTest is class

public class StringArrayTest {
	
    //generateStringArray is method
	
    public static List<String> generateStringArray(Integer N){
        List<String> TestList = new  List<String>();
        for (Integer i=0;i<N;i++){
        TestList.add('Test ' + i);
        system.debug(TestList[i]);
    }
    return TestList;
}
}