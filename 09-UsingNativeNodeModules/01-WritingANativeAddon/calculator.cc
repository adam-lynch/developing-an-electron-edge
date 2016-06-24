#include <node.h>

namespace calculator {
    using v8::FunctionCallbackInfo;
    using v8::Isolate;
    using v8::Local;
    using v8::Object;
    using v8::String;
    using v8::Number;
    using v8::Value;

    void Method(const FunctionCallbackInfo<Value>& args) {
        Isolate* isolate = args.GetIsolate();

        double value = args[0]->NumberValue() + args[1]->NumberValue();
        Local<Number> num = Number::New(isolate, value);
        args.GetReturnValue().Set(num);
    }

    void init(Local<Object> exports) {
        NODE_SET_METHOD(exports, "add", Method);
    }

    NODE_MODULE(addon, init)
}